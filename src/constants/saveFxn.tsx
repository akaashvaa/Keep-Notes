/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from 'react-redux'
import { setTodoList } from '../store/todoListSlice'
import { useState } from 'react'

interface Note {
  id: number
  title: string
  content: string
}

interface State1 {
  notes: {
    selectedNote: Note
  }
}
interface State2 {
  todoList: {
    todoList: Array<Note>
  }
}

export const Save = () => {
  // Created a copy of the todoList with the updated content
  const dispatch = useDispatch()
  const selectedNote = useSelector((state: State1) => state.notes.selectedNote)
  const todoList = useSelector((state: State2) => state.todoList.todoList)

  let updatedTodoList = []
  //first we will handle the case when we are creating a new note without selecting any note
  // console.log(selectedNote) //check if note is null or not
  if (!selectedNote) {
    updatedTodoList = [
      {
        id: todoList.length + 1,
        title: editedTitle,
        content: editedContent,
      },
      ...todoList,
    ]
  } else {
    // now we will handle the case when we are editing an existing note
    updatedTodoList = todoList.map((note) => {
      if (note.id === selectedNote.id) {
        return {
          ...note,
          title: editedTitle,
          content: editedContent,
        }
      }
      return note
    })
  }
  // Dispatch an action to update the todoList in the Redux store
  dispatch(setTodoList(updatedTodoList))
  // console.log(updatedTodoList)
  // console.log(todoList.length)
}
