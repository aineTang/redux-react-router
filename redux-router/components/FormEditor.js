import React,{ Component } from "react"
import DialogButton from "./DialogButton.js"
import $ from "jquery"
class FormEditor extends Component{
    removeItem(event){
        let index = $(event.currentTarget).data("item-index");
        this.props.removeItem(index);
    }
    render() {
        return (
            <div>
                {
                    this.props.items.map((item,index) =>{
                        return (
                            <div>
                                {
                                    (() =>{
                                        if (item.type == "date"){
                                            return (<input type="date" />)
                                        }
                                        else{
                                            return (<input type="text" />)
                                        }
                                    })()
                                }
                                <button onClick={this.removeItem.bind(this)} data-item-index={index}>-</button>
                            </div>
                        )
                    })
                }
                <DialogButton addItem={this.props.addItem} />
            </div>
        );
    }
}
export default FormEditor