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

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={MyContainer}>
                <IndexRoute component={FormEditorPage}></IndexRoute>
                <Route path="/editor" component={FormEditorPage}></Route>
                <Route path="/preview" component={FormPreviewPage}></Route>
            </Route>
        </Router>
    </Provider>
    ,rootElement
);
