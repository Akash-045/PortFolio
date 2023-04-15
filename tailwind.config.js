/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './app/**/*.{js,ts,jsx,tsx}',
  
]

export const theme = {
  fontFamily: {
    'kaushan': ['Kaushan Script'],
    darkMode:'class',
  },
  extend: {
    colors: {
      green: {
        DEFAULT: '#00f260',
        
      },
    }
  },
};
export const plugins = [];
