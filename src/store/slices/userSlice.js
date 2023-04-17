import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  isAuth: false,
  accessToken: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id
      state.isAuth = action.payload.isAuth
      state.accessToken = action.payload.accessToken
      localStorage.setItem('token', action.payload.accessToken)
    },
    removeUser(state) {
      state = initialState
      localStorage.removeItem('token')
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
