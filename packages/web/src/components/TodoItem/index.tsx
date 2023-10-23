import React from 'react'

interface TodoItemProps {
  todo: {
    id: number
    text: string
    completed: boolean
  }
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className="flex items-center space-x-4 p-2 border-b border-gray-300">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="form-checkbox h-5 w-5 text-indigo-600"
      />
      <span
        className={`flex-grow ${
          todo.completed ? 'line-through text-gray-500' : ''
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-600 hover:text-red-800 cursor-pointer"
      >
        Excluir
      </button>
    </div>
  )
}
