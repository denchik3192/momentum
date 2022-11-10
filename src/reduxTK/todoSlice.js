import { createSlice } from "@reduxjs/toolkit";
import { weatherAPI } from "../API/API";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos : [
            { id: 1, content: 'make a call' },
            { id: 2, content: 'date with friends' },
        ],
        doneTodos : [
            { id: 1, content: 'make a call2', checked: true },
            { id: 2, content: 'date with friends2', checked: true},
        ],
    },
    reducers : {
        addToDo(state, action) {
            const content = action.payload
            const newId = state.todos.length + 1;
            
            state.todos.push({ id: newId, content: `${content}` });
        },
        addDoneToDo(state, action) {
            const content = action.payload
            const newId = state.todos.length + 1;
            console.log(content);
            
            state.doneTodos.push({ id: newId, content: `${content}` });//check
        },
        deleteToDo(state, action) {
            state.todos.pop();
        }
    }
})

export default todoSlice.reducer;
export const {addToDo, deleteToDo, addDoneToDo} = todoSlice.actions;