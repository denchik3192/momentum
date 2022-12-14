import { createSlice } from "@reduxjs/toolkit";


export const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        count: 0,
        userName: 'Den',
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

export default toolkitSlice.reducer;
export const {decrement, increment, changeUserName, changeUserFocus} = toolkitSlice.actions;
