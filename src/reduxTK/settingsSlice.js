import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
    name: 'toolkit',
    initialState: {
        settings: [
            { id: 1, name: 'time' },
            { id: 2, name: 'date' },
            { id: 3, name: 'greeting' },
            { id: 4, name: 'qoutes' },
            { id: 5, name: 'audio' },
            { id: 6, name: 'Weather' },
        ]
    },
    reducers: {
        increment(state) {
            state.count += 1;
        },
        decrement(state) {
            state.count -= 1;
        },
        changeUserName(state, action) {
            state.userName = action.payload;
        },
    }
    
})

export default settingsSlice.reducer;
export const {decrement, increment, changeUserName} = settingsSlice.actions;
