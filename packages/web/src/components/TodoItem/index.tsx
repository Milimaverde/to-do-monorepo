import Image from 'next/image'
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
    <div className="flex items-center space-x-4 p-4 border-b border-7">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="appearance-none rounded-full w-5 h-5 border-colors-16 border-[#777A92] focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-12 checked:focus:ring-0 checked:focus:shadow-none checked:bg-gradient-to-r from-15 to-16 bg-colors-2 dark:bg-12"
      />

      <span
        className={`flex-grow break-words overflow-hidden ${
          todo.completed
            ? 'line-through text-8 text font-light'
            : 'text-3 dark:text-3'
        }`}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>
        <Image
          src="/icon-cross.svg"
          width={18}
          height={18}
          className="w-[18px] h-[18px] max-w-none"
          alt="Excluir"
        />
      </button>
    </div>
  )
}
