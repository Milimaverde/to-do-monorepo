'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'

export const ChangeThemeButton = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? (
        <Image src="/icon-sun.svg" width={24} height={24} alt="Sun" />
      ) : (
        <Image src="/icon-moon.svg" width={24} height={24} alt="Moon" />
      )}
    </button>
  )
}
