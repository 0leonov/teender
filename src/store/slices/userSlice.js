import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: {},
  isProfileSetupCompleted: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const { info } = action.payload

      state.info = info

      if (info.name && info.age && info.sex && info.photo) state.isProfileSetupCompleted = true
    },
    removeUser(state) {
      state.info = {}
      state.isProfileSetupCompleted = false
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
