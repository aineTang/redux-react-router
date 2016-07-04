import React,{Component,PropTypes} from "react"
import {connect} from "react-redux"
import * as formHandler from "../handle/form.js"
class MyContainer extends Component{
    constructor(props){
        super(props)
    }
    renderEditor(){
        formHandler.handleEditor();
        this.context.router.push("/edit");
    }
    renderPreview(){
        formHandler.handlePreview();
        this.context.router.push("/preview")
    }
    popupDialog(){
    }
    render(){
        var self = this;
        return (<div>
            {(() => {
                if (this.props.status === "edit") {
                    return <button onClick={self.renderPreview.bind(this)}>预览</button>
                }
                return <button onClick={self.renderEditor.bind(this)}>编辑</button>
            })()}

            {self.props.children}
            <div>
                {(() =>{
                    if (self.props.status === "preview") {
                        return <button>提交</button>
                    }
                })()}
            </div>
        </div>);
    }
}
MyContainer.propTypes = {
    status: PropTypes.string.isRequired
};

MyContainer.contextTypes = {
    router:React.PropTypes.object
};

function mapStateToProps(state,ownProps){
    return {
        status:state.formState.status
    }
}

export default connect(mapStateToProps,{})(MyContainer);