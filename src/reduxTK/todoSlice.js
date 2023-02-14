import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [
            { id: 1, content: 'React', checked: false },
            { id: 2, content: 'Redux', checked: true },
            { id: 3, content: 'Redux Toolkit', checked: false },
            { id: 4, content: 'Async thunk redux toolkit', checked: true },
            { id: 5, content: 'Graph QL', checked: false },
            { id: 6, content: 'Typescript', checked: false },
            { id: 7, content: 'Responsive/Adaptive', checked: false },
        ],
    },
    reducers: {
        addToDo(state, action) {
            const newId = state.todos.length + 1;
            state.todos.push({ id: newId, content: `${action.payload}`, checked: false });
        },
        sortByName(state, action) {//fix mutation
            const content = action.payload;
            if (content === 'Name') {
                state.todos.sort((a, b) => a.content > b.content ? 1 : -1);
            } if (content === 'Date') {
                state.todos.sort((a, b) => a.id > b.id ? 1 : -1);
            }
        },
        deleteToDo(state, action) {
            let newToDos = [...state.todos].filter(item => item.id !== action.payload)
            state.todos = newToDos;
        },
        changeToDoStatus(state, action) {
            let newToDos = [...state.todos].filter(item => {
                if (item.id === action.payload) {
                    item.checked = !item.checked
                }
                return item;
            })
            state.todos = newToDos;
        },
        updateToDo(state, action) {
            let newToDo = [...state.todos].filter(item => {
                if (item.id === action.payload.id) {
                    item.content = action.payload.newEditedToDo
                }
                return item;
            })
            state.todos = newToDo;
        }
    }
})

export default todoSlice.reducer;
export const { getToDo, addToDo, deleteToDo, changeToDoStatus, updateToDo, sortByName } = todoSlice.actions;