import React, { Component, PropTypes } from 'react'
import {connect} from "react-redux"
import FormEditor from "../components/FormEditor.js"
class FormEditorPage extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <FormEditor addItem={this.addItem} items={this.props.items} />
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

export default connect(mapStateToProps,{})(FormEditorPage)
