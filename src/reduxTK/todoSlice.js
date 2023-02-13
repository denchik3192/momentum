import { createSlice } from "@reduxjs/toolkit";
import { weatherAPI } from "../API/API";

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
        getToDo(state, action) {
            console.log('all');
        },
        addToDo(state, action) {
            const content = action.payload
            const newId = state.todos.length + 1;
            state.todos.push({ id: newId, content: `${content}` });
        },
        sortByName(state, action) {//fix mutation
            const content = action.payload;
            if (content === 'Name') {
                state.todos.sort((a, b) => a.content > b.content ? 1 : -1);
            } if (content === 'Date') {
                state.todos.sort((a, b) => a.id > b.id ? 1 : -1);
            }

        },
        // changeFilter(state, action) {
        //     console.log(action.payload);
        //     if (action.payload === 'complited') {
        //         state.todos = state.todos.filter( item => item.checked)
        //     }
        //     if (action.payload === 'active') {
        //         state.todos = state.todos.filter( item => !item.checked)
        //     }
        //     if (action.payload === 'all') {
        //         return state.todos;
        //     }
            
        // },
        deleteToDo(state, action) {
            let newToDo = [...state.todos].filter(item => item.id !== action.payload)
            state.todos = newToDo;
        },
        changeToDoStatus(state, action) {
            console.log(action.payload);
            let newToDo = [...state.todos].filter(item => {
                if (item.id === action.payload) {
                    item.checked = !item.checked
                }
                return item;
            })

            state.todos = newToDo;
            console.log(state.todos);
        },
        updateToDo(state, action) {
            let newToDo = [...state.todos].filter(item => {
                console.log(action.payload.id);
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
export const { getToDo, addToDo, deleteToDo, changeToDoStatus, updateToDo, sortByName, changeFilter } = todoSlice.actions;