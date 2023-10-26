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
  { id: 1, text: 'Limpar a gatinha', completed: false },
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
          <div className="flex justify-between mb-5">
            <h1 className="font-bold text-2xl">T O D O</h1>
            <ChangeThemeButton />
          </div>
          <div className="mb-4">
            <form
              onSubmit={handleTodoAdd}
              className="bg-2 dark:bg-12 rounded drop-shadow-xl text-white w-full placeholder:text-sm placeholder:text-8 flex items-center px-4 gap-1"
            >
              <div className="form-checkbox h-5 w-5 rounded-full bg-[transparent] border-[#777A92]" />
              <input
                placeholder="Criar um novo todo..."
                type="text"
                className="bg-[transparent] py-3  border-none focus:outline-none focus:shadow-none focus:ring-0 outline-none w-full text-8 dark:text-9 placeholder:text-sm placeholder:text-8"
              />
            </form>
          </div>
          <div className="bg-2 dark:bg-12 rounded drop-shadow-xl">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleTodoToggle}
                onDelete={handleTodoDelete}
              />
            ))}
            <div className="bg-2 dark:bg-12 flex rounded justify-between">
              <p className="px-5 py-4 text-8 text-sm ">
                {todos.filter((todo) => !todo.completed).length} Items left
              </p>
              <p>
                <button
                  onClick={() =>
                    setTodos((prevState) =>
                      prevState.filter((todo) => !todo.completed),
                    )
                  }
                  className="px-5 py-4 text-8 text-sm "
                >
                  Clear Completed
                </button>
              </p>
            </div>
          </div>
          <div className="flex justify-between drop-shadow-xl mt-5 rounded px-14 py-4 bg-2 dark:bg-12 text-8 items-center mb-12">
            <p>All</p>
            <p>Active</p>
            <p>Completed</p>
          </div>
        </div>
        <div className="flex justify-center mb-16">
          <p className="text-sm text-7">Drag and drop to reaader list</p>
        </div>
      </div>
    </>
  )
}
