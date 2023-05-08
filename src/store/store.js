import { configureStore } from '@reduxjs/toolkit'
import useReducer from '@slices/userSlice'

const store = configureStore({
  reducer: { user: useReducer },
})

export default store
