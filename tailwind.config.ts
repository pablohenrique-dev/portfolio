import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'gray': {
        100: '#F5F6F8',
        200: '#DFDFE0',
        600: '#333333',
      },
      'primary': '#2F5DF1'
    },
  },
  plugins: [],
}
export default config
