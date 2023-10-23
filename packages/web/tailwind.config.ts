import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      1: '#3A7BFD',
      2: '#FAFAFA',
      3: '#E4E5F1',
      4: '#D2D3DB',
      5: '#9394A5',
      6: '#484B64',
      7: '#393A4C',
      8: '#4D5066',
      9: '#777A92',
      10: '#E4E5F1',
      11: '#CACDE8',
      12: '#25273C',
      13: '#161722',
    },
  },
  plugins: [],
}
export default config
