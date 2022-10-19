import { createSlice } from "@reduxjs/toolkit";


export const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        count: 0,
        userName: 'Denchik'
    },
    reducers: {
        increment(state) {
            state.count += 1;
        },
        decrement(state) {
            state.count -= 1;
        }
    }
})

export default toolkitSlice.reducer;
export const {decrement, increment} = toolkitSlice.actions;
