import { createSlice } from "@reduxjs/toolkit";
import { weatherAPI } from "../API/API";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos : [
            // { id: 1, content: 'make a call1', checked: true },
            // { id: 2, content: 'make a call2', checked: false },
        ],
    },
    reducers : {
        addToDo(state, action) {
            const content = action.payload
            const newId = state.todos.length + 1;
            state.todos.push({ id: newId, content: `${content}` });
        },
        // addDoneToDo(state, action) {
        //     const content = action.payload
        //     const newId = state.todos.length + 1;
        //     console.log(content);
            
        //     state.doneTodos.push({ id: newId, content: `${content}` });//check
        // },
        deleteToDo(state, action) {
            let newToDo = [...state.todos].filter(item => item.id !== action.payload)
            state.todos = newToDo;
        },
        changeToDoStatus(state, action) {
            console.log(action);
            let newToDo = [...state.todos].filter(item => {
                if(item.id === action.payload) {
                    item.checked = !item.checked
                }
                return item;
            })
            
           state.todos = newToDo;
           console.log(state.todos);
        },
        updateToDo(state , action) {
            let newToDo = [...state.todos].filter(item => {
                console.log( action.payload.id);
                if(item.id === action.payload.id) {
                    item.content = action.payload.newEditedToDo
                }
                return item;
            })
            state.todos = newToDo;
        }
    }
})

export default todoSlice.reducer;
export const {addToDo, deleteToDo, changeToDoStatus, updateToDo} = todoSlice.actions;