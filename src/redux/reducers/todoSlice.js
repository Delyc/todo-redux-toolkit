import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                title: action.payload.title,
                completed: false
            };
            state.push(newTodo)
        },
        updateTodo : (state, action) => {
            const editItem = state.find((item) => item.id === action.payload.id)
            editItem.title = action.payload.title
        },
        markAsCompleted:(state, action) => {
            console.log("actions, action", action)
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
         },
         deleteTodo: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
            
         }
    }
})


export const {addTodo, markAsCompleted, updateTodo, deleteTodo} = todoSlice.actions
export default todoSlice.reducer