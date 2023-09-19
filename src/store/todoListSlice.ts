import { createSlice } from '@reduxjs/toolkit'
import { notes } from '../constants/index'

interface NoteState {
  todoList: Array<{
    id: number
    title: string
    content: string
  }>
}

// Assuming 'notes' is an array of objects with 'id', 'title', and 'content' properties
const initialState: NoteState = {
  todoList: notes.map((note) => ({
    id: note.id,
    title: note.title,
    content: note.content,
  })),
}

const todoListSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setTodoList: (state, action) => {
      state.todoList = action.payload
    },
  },
})

export const { setTodoList } = todoListSlice.actions
export const todoListReducer = todoListSlice.reducer
