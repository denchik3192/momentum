import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';
// import toolkitReducer from './toolkitReducer';
import mainSlice from './mainSlice';
import weatherSlice from './weatherSlice';


const rootReducer = combineReducers({
    toolkit: mainSlice,
    todo: todoSlice,
    weather: weatherSlice,
})

export const store = configureStore ({
    // toolk
    reducer: rootReducer,
})