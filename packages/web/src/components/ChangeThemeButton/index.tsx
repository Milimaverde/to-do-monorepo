'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'

export const ChangeThemeButton = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? (
        <Image src="/icon-sun.svg" width={20} height={20} alt="Sun" />
      ) : (
        <Image src="/icon-moon.svg" width={20} height={20} alt="Moon" />
      )}
    </button>
  )
}
