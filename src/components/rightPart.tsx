import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTodoList } from '../store/todoListSlice'
import TextArea from './textArea'

interface Note {
  id: number
  title: string
  content: string
}

interface State {
  notes: {
    selectedNote: Note
  }
}

interface List {
  todoList: {
    todoList: Note[]
  }
}

const RightPart = () => {
  const selectedNote = useSelector((state: State) => state.notes.selectedNote)
  const todoList = useSelector((state: List) => state.todoList.todoList)

  const dispatch = useDispatch()

  // State to track changes in title and content
  const [editedTitle, setEditedTitle] = useState('')
  const [editedContent, setEditedContent] = useState('')

  useEffect(() => {
    // Updated local state when a new note is selected
    setEditedTitle(selectedNote ? selectedNote.title : '')
    setEditedContent(selectedNote ? selectedNote.content : '')
    // console.log(selectedNote)
  }, [selectedNote])

  const save = () => {
    // Created a copy of the todoList with the updated content

    let updatedTodoList = []
    //first we will handle the case when we are creating a new note without selecting any note
    console.log(selectedNote)
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

  const reset = () => {
    setEditedTitle('')
    setEditedContent('')
  }

  return (
    <div className="relative w-[60%] h-[700px] rounded-lg flex flex-col gap-5">
      <input
        className="w-1/2 bg-primary font-bold p-2 px-5  rounded-lg outline-none"
        type="text"
        placeholder="Your Title"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <TextArea
        editedContent={editedContent}
        setEditedContent={setEditedContent}
      />
      <div className="absolute bottom-1 right-5 flex">
        <button
          className="bg-secondary px-5 rounded-md border-2 border-[#333] mx-3 my-2"
          onClick={reset}
        >
          reset
        </button>
        <button
          className="bg-secondary rounded-md px-5 border-2 border-[#333] mx-3 my-2"
          onClick={save}
        >
          save
        </button>
      </div>
    </div>
  )
}
export default RightPart
