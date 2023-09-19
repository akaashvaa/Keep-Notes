import { combineReducers } from '@reduxjs/toolkit'
import { todoListReducer } from './todoListSlice'
import { noteReducer } from './noteSlice'

export const rootReducer = combineReducers({
  notes: noteReducer,
  todoList: todoListReducer,
})
