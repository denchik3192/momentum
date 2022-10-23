import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos : [
            { id: 1, content: 'make a call' },
            { id: 2, content: 'date with friends' },
        ],
        doneTodos : [
            { id: 1, content: 'make a call2' },
            { id: 2, content: 'date with friends2' },
        ],
    },
    reducers : {
        addToDo(state, payload) {
            state=state.todos.push({ id: 3, content: `${payload}` });
        }
    }
})

export default todoSlice.reducer;
export const {addToDo} = todoSlice.actions;