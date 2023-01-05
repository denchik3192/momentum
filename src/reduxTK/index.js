import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';
// import toolkitReducer from './toolkitReducer';
import mainSlice from './mainSlice';
import weatherSlice from './weatherSlice';
import quoteSlice from './quoteSlice';


const rootReducer = combineReducers({
    toolkit: mainSlice,
    todo: todoSlice,
    weather: weatherSlice,
    quote: quoteSlice,
})

export const store = configureStore ({
    // toolk
    reducer: rootReducer,
})