'use client'

import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import { ChangeThemeButton } from '@/components/ChangeThemeButton'

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <div>
        <Image
          src={'/bg-mobile-dark.jpg'}
          alt="Imagem de Fundo"
          width={375}
          height={200}
        />
        <div>
          <h1>TODO</h1>
          <ChangeThemeButton />
        </div>
      </div>
    </>
  )
}
