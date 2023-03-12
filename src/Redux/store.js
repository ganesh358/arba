import { legacy_createStore , applyMiddleware} from "redux";
import {productReducer} from "./Product/reducer";
import thunk from "redux-thunk"

const store = legacy_createStore(productReducer,applyMiddleware(thunk))


export {store}

