import ReactDOM from "react-dom"
import React from "react"
import {Provider} from "react-redux"
import {Router, Route, browserHistory, IndexRoute} from "react-router"
import {syncHistoryWithStore} from "react-router-redux"

import MyContainer from "./container/MyContainer"
import FormEditorPage from "./container/FormEditorPage.js"
import FormPreviewPage from "./container/FormPreviewPage.js"
import store from "./store.js"

var history = syncHistoryWithStore(browserHistory,store);
let rootElement = document.getElementById("root");
console.log("打印当前state：");
console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={MyContainer}>
                <IndexRoute component={FormPreviewPage} />
                <Route path="/edit" component={FormEditorPage} />
                <Route path="/preview" component={FormPreviewPage} />
            </Route>
        </Router>
    </Provider>
    ,rootElement
);
