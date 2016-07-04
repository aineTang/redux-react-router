import React, { Component, PropTypes } from 'react'
import {connect} from "react-redux"
import $ from "jquery"
import * as ItemHandler from "../handle/item.js"
import FormEditor from "../components/FormEditor.js"
class FormEditorPage extends Component{
    constructor(props){
        super(props);
    }
    addItem(item){
        ItemHandler.handleAddItem(item);
    }
    removeItem(index){
        ItemHandler.handleRemoveItem(index);
    }
    render() {
        return (
            <FormEditor addItem={this.addItem} removeItem={this.removeItem} items={this.props.items} />
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
