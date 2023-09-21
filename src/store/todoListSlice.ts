import { createSlice } from '@reduxjs/toolkit'

type Note = {
  id: string
  title: string
  content: string
}

// Initialize 'notes' as an empty array of type 'Note'
const notes: Note[] = []

interface NoteState {
  todoList: Note[]
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
