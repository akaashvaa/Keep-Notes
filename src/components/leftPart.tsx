import { selectNote } from '../store/noteSlice.ts'
import { useDispatch, useSelector } from 'react-redux'
import { setTodoList } from '../store/todoListSlice.ts'
import { v4 as uuidv4 } from 'uuid'

interface Note {
  id: string
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

export default function LeftPart() {
  const dispatch = useDispatch()

  const selectedNote = useSelector((state: State1) => state.notes.selectedNote)
  const todoList = useSelector((state: State2) => state.todoList.todoList)
  // console.log(todoList)

  const switchSave = () => {
    const titleElements = document.querySelectorAll(
      '.title'
    ) as NodeListOf<HTMLInputElement>
    const contentElements = document.querySelectorAll(
      '.content'
    ) as NodeListOf<HTMLInputElement>

    // Assuming there's only one element with the class "title" and "content,"
    // you can access their values like this:
    const titleValue = titleElements[0].value
    const contentValue = contentElements[0].value

    console.log('Title Value:', titleValue)
    console.log('Content Value:', contentValue)

    if (selectedNote !== null) {
      const updatedTodoList = todoList.map((listNote) => {
        if (listNote.id === selectedNote.id) {
          // console.log(selectedNote)
          // console.log(listNote)
          console.log('hit')
          return {
            ...listNote,
            title: titleValue,
            content: contentValue,
          }
        }
        return listNote
      })
      console.log(updatedTodoList)
      dispatch(setTodoList(updatedTodoList))
    }
  }

  const handleCreateNewNote = async () => {
    // created a new note id
    switchSave()
    const newNote = {
      id: uuidv4(),
      title: '',
      content: '',
    }
    const updatedTodoList = [newNote, ...todoList]
    // Dispatch an action to add the new note to the todoList
    dispatch(setTodoList(updatedTodoList))
    dispatch(selectNote(newNote))
  }

  const handleNoteClick = (note: Note) => {
    switchSave()
    dispatch(selectNote(note))
  }

  const deleteChanges = (note: Note) => {
    const updatedTodoList = todoList.filter((item) => item.id !== note.id)
    // console.log(updatedTodoList)
    dispatch(setTodoList(updatedTodoList))
    dispatch(selectNote(todoList.length > 1 ? updatedTodoList[0] : null))
  }

  return (
    <div className="todo-list-item basis-[25%] h-[700px] flex flex-col gap-3 bg-primary p-3 pt-5 rounded-lg justify-start items-center overflow-y-auto ">
      <button
        onClick={handleCreateNewNote}
        className="w-1/2 border-[3px] rounded-lg border-secondary mb-3  "
      >
        Create New Note <span className=" pl-5 w-10 h-10"> &#43; </span>{' '}
      </button>

      {todoList.map((note, i) => (
        <div
          key={i}
          className={`w-3/4 flex justify-evenly items-center h-14 rounded-lg ${
            selectedNote?.id === note.id ? 'selected-note' : ''
          }`}
        >
          <button
            className="w-3/4 bg-secondary rounded-md h-12 "
            onClick={() => handleNoteClick(note)}
          >
            {note.title?.length < 10
              ? note.title
              : note.title?.slice(0, 10) + '...'}
          </button>
          <button
            onClick={() => deleteChanges(note)}
            className="rounded-md  bg-primary  px-3 py-1  "
          >
            <span className="flex items-center "> &#10005;</span>{' '}
          </button>
        </div>
      ))}
    </div>
  )
}
