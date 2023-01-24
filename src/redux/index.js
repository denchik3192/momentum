import { applyMiddleware, combineReducers, createStore } from "redux";
import mainReducer from "./mainReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import { countWatcher } from "./saga/countSaga";
import { rootWatcher } from "./saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers ({
    main: mainReducer,
})


export const store = createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk), applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootWatcher)