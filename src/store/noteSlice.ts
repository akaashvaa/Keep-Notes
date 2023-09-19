import { createSlice } from '@reduxjs/toolkit'

interface NoteState {
  selectedNote: {
    title: string
    content: string
  } | null
}

const initialState: NoteState = {
  selectedNote: null,
}

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    selectNote: (state, action) => {
      state.selectedNote = action.payload
    },
  },
})

export const { selectNote } = noteSlice.actions
export const noteReducer = noteSlice.reducer
