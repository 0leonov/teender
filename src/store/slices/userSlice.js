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
      const accessToken = action.payload
      const base64Url = accessToken.split('.')[1]
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
          })
          .join('')
      )

      const payload = JSON.parse(jsonPayload)

      state.id = payload.user_id
      state.isAuth = true
      localStorage.setItem('access_token', accessToken)
    },
    removeUser(state) {
      state.id = null
      state.isAuth = false
      state.accessToken = null
      localStorage.removeItem('access_token')
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
