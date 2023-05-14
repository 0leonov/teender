import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'light',
}

export const availableThemes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
]

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      const theme = availableThemes.includes(action.payload) ? action.payload : 'light'

      state.value = theme
      localStorage.setItem('theme', theme)
      document.querySelector('html').setAttribute('data-theme', theme)
    },
  },
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer
