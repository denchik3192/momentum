import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';
// import toolkitReducer from './toolkitReducer';
import mainSlice from './mainSlice';


const rootReducer = combineReducers({
    toolkit: mainSlice,
    todo: todoSlice,
})

export const store = configureStore ({
    // toolk
    reducer: rootReducer,
})