import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import thunk from "redux-thunk";
import countReducer from "./countReducer";
import createSagaMiddleware from "redux-saga";
import {rootWatcher} from "../saga";
import userReducer from "./userReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
    users: userReducer,
    counter: countReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(rootWatcher)
