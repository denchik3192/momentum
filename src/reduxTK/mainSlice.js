import { createSlice } from "@reduxjs/toolkit";


export const mainSlice = createSlice({
    name: 'main',
    initialState: {
        count: 0,
        userName: 'Den1',
        userFocus: '',
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
        changeUserFocus(state, action) {
            state.userFocus = action.payload;
        },
    }
    
})

export default mainSlice.reducer;
export const {decrement, increment, changeUserName, changeUserFocus} = mainSlice.actions;
