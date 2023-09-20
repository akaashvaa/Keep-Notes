import React from 'react'
import { useDispatch } from 'react-redux'
import { setTodoList } from '../store/todoListSlice'

interface Note {
  id: string
  title: string
  content: string
}

interface SaveButtonProps {
  selectedNote: Note | null // Define the type for selectedNote
  todoList: Note[] // Define the type for todoList
  editedContent: string
  editedTitle: string
}

const SaveButton: React.FC<SaveButtonProps> = ({
  selectedNote,
  todoList,
  editedContent,
  editedTitle,
}) => {
  const dispatch = useDispatch()

  const save = () => {
    // Created a copy of the todoList with the updated content

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
  return (
    <button
      className="bg-secondary rounded-md px-5 border-2 border-[#333] mx-3 my-2"
      onClick={save}
    >
      save
    </button>
  )
}
export default SaveButton
