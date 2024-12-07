import { configureStore } from '@reduxjs/toolkit'
import {getInitState} from './initialState'
import { todosReducer } from './slices/todoSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState: getInitState()
})

store.subscribe(
    () => localStorage.setItem('reduxStatePractic', JSON.stringify(store.getState()))
)