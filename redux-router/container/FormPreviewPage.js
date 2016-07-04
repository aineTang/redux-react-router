import React,{ Component,PropTypes } from "react"
import FormPreview from "../components/FormPreviewer"
import {connect} from "react-redux"
class FormPreviewPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <FormPreview items={this.props.items} />
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
export default connect(mapStateToProps,{
})(FormPreviewPage)
