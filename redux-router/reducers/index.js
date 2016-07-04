import { combineReducers } from 'redux'
import actionType from "../actions/action-defination.js"
import _ from "lodash"
import { routerReducer as routing } from "react-router-redux"
const initFormState = {
    status:"edit"
};
const initItemState = {
    items:[
        {
            type:"text"
        },
        {
            type:"date"
        },
        {
            type:"text"
        }
    ]
};

function formReducer(state=initFormState,action){
    switch (action.type) {
        case actionType.SHOW_EDITOR:
            return Object.assign({}, state, {
                status : "preview"
            });
        case actionType.SHOW_PREVIEW:
            return Object.assign({}, state, {
                status : "edit"
            });
        default:
            return state
    }
}

function itemReducer(state=initItemState,action){
    switch (action.type) {
        case actionType.ADD_FORM_ITEM:
            var addedItem = _.concat(state.items,action.item);
            return Object.assign({}, state, {
                items:addedItem
            });
        case actionType.REMOVE_FORM_ITEM:
            var removedItems = _.filter(state.items,(item,index)=>{
                return index != action.index;
            });
            return Object.assign({}, state, {
                items:removedItems
            });
        default:
            return state
    }
}

let reducers = combineReducers({
    formState:formReducer,
    itemState:itemReducer,
    routing
});

export default reducers
