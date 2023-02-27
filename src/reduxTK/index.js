import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';
// import toolkitReducer from './toolkitReducer';
import mainSlice from './mainSlice';
import weatherSlice from './weatherSlice';
import quoteSlice from './quoteSlice';
import settingsSlice from './settingsSlice';
import filterSlice from './filterSlice';
import backgroundSlice from './backgroundSlice';


const rootReducer = combineReducers({
    main: mainSlice,
    todo: todoSlice,
    weather: weatherSlice,
    quote: quoteSlice,
    settings: settingsSlice,
    filter: filterSlice,
    background: backgroundSlice,
})

export const store = configureStore ({
    // toolk
    reducer: rootReducer,
})