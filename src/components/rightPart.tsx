import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import TextArea from './textArea'
import SaveButton from './savebutton'

interface Note {
  id: string
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

  // State to track changes in title and content
  const [editedTitle, setEditedTitle] = useState('')
  const [editedContent, setEditedContent] = useState('')

  useEffect(() => {
    // Updated local state when a new note is selected
    setEditedTitle(selectedNote ? selectedNote.title : '')
    setEditedContent(selectedNote ? selectedNote.content : '')
    // console.log(selectedNote)
  }, [selectedNote])

  const reset = () => {
    setEditedTitle('')
    setEditedContent('')
  }

  return (
    <div className="relative w-[60%] h-[700px] rounded-lg flex flex-col gap-5">
      <input
        className="title w-1/2 bg-primary font-bold p-2 px-5  rounded-lg outline-none"
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
        <SaveButton
          selectedNote={selectedNote}
          todoList={todoList}
          editedTitle={editedTitle}
          editedContent={editedContent}
        />
      </div>
    </div>
  )
}
export default RightPart
