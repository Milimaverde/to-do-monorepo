'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import { ChangeThemeButton } from '@/components/ChangeThemeButton'
import { TodoItem } from '@/components/TodoItem'

interface TodoItem {
  id: number
  text: string
  completed: boolean
}

const defaultTodoList = [
  { id: 1, text: 'Limpar a caixinha da gatinha', completed: false },
  { id: 2, text: 'Fazer o almoço', completed: false },
  { id: 3, text: 'Estudar', completed: false },
  { id: 4, text: 'Lavar a louça', completed: false },
  { id: 5, text: 'Lavar a roupa', completed: false },
  { id: 6, text: 'Fazer o jantar', completed: false },
  { id: 7, text: 'Fazer o café', completed: false },
  { id: 8, text: 'Fazer o chá', completed: false },
]

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [todos, setTodos] = useState<TodoItem[]>(defaultTodoList)

  const handleTodoToggle = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const handleTodoDelete = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
  }

  const handleTodoAdd = (event: any) => {
    event.preventDefault()
    setTodos((todos) => [
      ...todos,
      {
        id: Math.random(),
        text: event.target[0].value,
        completed: false,
        label: 'Create a new todo ...',
      },
    ])
  }

  return (
    <>
      <div>
        <div className="">
          <Image
            src={'/bg-mobile-dark.jpg'}
            alt="Imagem de Fundo"
            width={375}
            height={200}
            className="absolute -z-10"
          />
        </div>
        <div className=" mx-5 pt-10">
          <div className="flex justify-between mb-8">
            <h1 className="font-bold text-2xl">T O D O</h1>
            <ChangeThemeButton />
          </div>
          <div className="mb-4">
            <form onSubmit={handleTodoAdd}>
              <input
                className="border-black text-white border-2 w-full"
                type="text"
              />
            </form>
          </div>
          <div>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleTodoToggle}
                onDelete={handleTodoDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
