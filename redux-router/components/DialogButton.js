import React,{ Component } from "react"
import ReactDOM from "react-dom"
import DialogContent from "./DialogContent.js"
import $ from "jquery"
import "jquery-ui"
class DialogButton extends Component {
    constructor(props){
        super(props);
    }
    openDialog(e){
        e.preventDefault();
        var $dialog = $('<div>').dialog({
            title:"Choose Text",
            width:400,
            close:function (){
                ReactDOM.unmountComponentAtNode(this);
                $(this).remove();
            }
        });

        var closeDialog = function (e){
            e.preventDefault();
            $dialog.dialog('close');
        };
        ReactDOM.render(
            <DialogContent submitHandler={this.props.addItem.bind(this)} closeDialog={closeDialog} />
            ,$dialog[0]
        );
    }
    render() {
        return (
            <div>
                <button onClick={this.openDialog.bind(this)}>+</button>
            </div>
        )
    }
}
export default DialogButton