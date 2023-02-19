import { createSlice } from "@reduxjs/toolkit";


export const mainSlice = createSlice({
    name: 'main',
    initialState: {
        userName: 'Den',
        userFocus: '',
    },
    reducers: {
        changeUserName(state, action) {
            console.log(action.payload);
            state.userName = action.payload;
        },
        changeUserFocus(state, action) {
            state.userFocus = action.payload;
        },
    }
    
})

export default mainSlice.reducer;
export const {changeUserName, changeUserFocus} = mainSlice.actions;
