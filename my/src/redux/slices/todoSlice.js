import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { v4 as uuidv4 } from 'uuid';

export const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState.todos,
    reducers: {
        
        deleteCurrent(state, action) {
            return state.filter(todo=>todo.id !== action.payload);
        },

        addTOdo: {
            reducer(state, action) {
            state.unshift(action.payload)},
            
            prepare(values) {
                return {
                    payload: {
                    id: uuidv4(),
                    ...values
                  } 
            }
           
        }},
        editTodo(state, action) {
            const [id, values] = action.payload;
            return state.map(todo=>todo.id===id ? todo={...todo, ...values}: todo)
        }
    }
})

export const { updateTodoStatus, deleteList, deleteCurrent, addTOdo, editTodo } = todoSlice.actions;

export const todosReducer = todoSlice.reducer;