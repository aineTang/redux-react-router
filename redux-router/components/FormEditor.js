import React,{ Component } from "react"
import $ from "jquery"
import DialogButton from "./DialogButton.js"
import * as ItemHandler from "../handle/item.js"

class FormEditor extends Component{
    removeItem(event){
        let index = $(event.currentTarget).data("item-index");
        this.props.removeItem(index);
    }
    addItem(item){
        ItemHandler.handleAddItem(item);
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
                <DialogButton addItem={this.addItem} />
            </div>
        );
    }
}
export default FormEditor