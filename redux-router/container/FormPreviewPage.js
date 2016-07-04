import React,{ Component,PropTypes } from "react"
import FormPreview from "../components/FormPreviewer"
import {connect} from "react-redux"
class FormPreviewPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        var self = this;
        console.log(self.props.items);
        return (
            <div>
                <FormPreview items={self.props.items}></FormPreview>
            </div>
        );
    }
}
FormPreviewPage.propTypes = {
    items:PropTypes.array.isRequired
};
function mapStateToProps(state,ownProps){
    return {
        items:state.itemState.items
    }
}
connect(mapStateToProps,{
})(FormPreviewPage);
export default FormPreviewPage
