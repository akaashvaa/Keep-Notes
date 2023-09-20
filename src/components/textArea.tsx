import React from 'react'

const textareaStyle: React.CSSProperties = {
  overflowY: 'auto',
  resize: 'none',
  border: '2px solid transparent',
  outline: 'none',
}

const textareaFocusStyle: React.CSSProperties = {
  borderColor: '#333',
  outline: 'none',
}

interface TextAreaProps {
  editedContent: string
  setEditedContent: (content: string) => void // Assuming setEditedContent is a function that takes a string argument
}

const TextArea: React.FC<TextAreaProps> = ({
  editedContent,
  setEditedContent,
}) => {
  return (
    <>
      <textarea
        className="content w-full h-full p-10 bg-primary text-white rounded-lg"
        placeholder="Type...."
        value={editedContent}
        style={{ ...textareaStyle, ...textareaFocusStyle }}
        onChange={(e) => setEditedContent(e.target.value)}
      />
    </>
  )
}

export default TextArea
