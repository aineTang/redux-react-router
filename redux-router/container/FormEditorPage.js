import React,{Component,PropTypes} from "react"
import {connect} from "react-redux"
import FormEditor from "../components/FormEditor.js"
class FormEditorPage extends Component{
    render() {
        var self = this;
        console.log(self.props.items);
        return (
            <FormEditor items={e=>this.items}></FormEditor>
        )
    }
}
FormEditorPage.PropTypes = {
    items:PropTypes.array.isRequired
};
function mapStateToProps(state,ownProps){
    return {
        items:state.itemState.items
    }
}
connect(mapStateToProps,{})(FormEditorPage);
export default FormEditorPage
