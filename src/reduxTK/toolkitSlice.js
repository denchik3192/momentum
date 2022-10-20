import { createSlice } from "@reduxjs/toolkit";


export const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        count: 0,
        userName: 'Denchik111'
    },
    reducers: {
        increment(state) {
            state.count += 1;
        },
        decrement(state) {
            state.count -= 1;
        },
        changeUserName(state) {
            state.userName += 'test';
        },
    }
})

export default toolkitSlice.reducer;
export const {decrement, increment, changeUserName} = toolkitSlice.actions;
