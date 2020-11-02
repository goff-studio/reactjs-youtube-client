import {createStore,applyMiddleware,compose} from "redux";
import thunk from 'redux-thunk'
import {reducer} from "./reducer";
// import {createLogger} from "redux-logger";

const middleware = [];
middleware.push(thunk);
// middleware.push(createLogger());

export const store = createStore(
    reducer,
    undefined,
    compose(applyMiddleware(...middleware)));

