import React,{Component,PropTypes} from "react"
import {connect} from "react-redux"
class MyContainer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props);
        var self = this;
        return (<div>
            {(() => {
                if (e=>this.status === "edit") {
                    return <button>预览</button>
                }
                return <button>编辑</button>
            })()}

            {self.props.children}
            <div>
                {(() =>{
                    if (e=>this.status === "edit") {
                        return <button>+</button>
                    }
                    return <button>提交</button>
                })()}
            </div>
        </div>);
    }
}
MyContainer.propTypes = {
    status: PropTypes.string.isRequired
};

MyContainer.contextType = {
    router:PropTypes.object
};

function mapStateToProps(state,ownProps){
    return {
        status:state.formState.status
    }
}
connect(mapStateToProps,{})(MyContainer);

export default MyContainer