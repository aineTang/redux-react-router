import React,{ Component } from "react"
class DialogContent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            type:"date"
        }
    }
    onTypeChange(e){
        this.setState({
            type: e.currentTarget.value
        });
    }
    onSubmit(e){
        this.props.closeDialog(e);
        this.props.submitHandler(this.state)
    }
    render(){
        return (
            <div>
                <div>请选择您要增添的元素：</div>
                <input type="radio" name="dialogType" checked={this.state.type==="date"} onChange={e=>this.onTypeChange(e)} value="date" />日期<br />
                <input type="radio" name="dialogType" checked={this.state.type==="text"} onChange={(e)=>this.onTypeChange(e)} value="text" />文本<br />
                <button type="submit" onClick={this.onSubmit.bind(this)}>提交</button>
                <button onClick={this.props.closeDialog}>取消</button>
            </div>
        )
    }
}
export default DialogContent