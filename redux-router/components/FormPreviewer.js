import React,{ Component } from "react"

class FormPreviewer extends Component{
    render() {
        console.log("当前的FormPreview");
        console.log(this);
        return (
            <div>
                {
                    this.props.items.map((item) =>{
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
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
export default FormPreviewer