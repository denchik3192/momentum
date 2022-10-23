import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';
// import toolkitReducer from './toolkitReducer';
import toolkitSlice from './toolkitSlice';


const rootReducer = combineReducers({
    toolkit: toolkitSlice,
    todo: todoSlice,
})

export const store = configureStore ({
    // toolk
    reducer: rootReducer,
})