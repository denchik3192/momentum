import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';
// import toolkitReducer from './toolkitReducer';
import mainSlice from './mainSlice';
import weatherSlice from './weatherSlice';
import quoteSlice from './quoteSlice';
import settingsSlice from './settingsSlice';


const rootReducer = combineReducers({
    main: mainSlice,
    todo: todoSlice,
    weather: weatherSlice,
    quote: quoteSlice,
    settings: settingsSlice,
})

export const store = configureStore ({
    // toolk
    reducer: rootReducer,
})