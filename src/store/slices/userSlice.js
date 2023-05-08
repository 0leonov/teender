import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null,
  token: null,
  isAuthenticated: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const { token, info } = action.payload

      state.info = info
      state.token = token
      state.isAuthenticated = true
    },
    removeUser(state) {
      state.info = null
      state.token = null
      state.isAuthenticated = false
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
