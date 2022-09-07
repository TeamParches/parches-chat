import { createSlice } from "@reduxjs/toolkit"

interface userLogged {
  username?: string
  avatar?: string
  verified?: boolean
  password?: string
  email?: string
  status?: number
  friends?: any
  pendingFriends?: any
  blockedUsers?: any
}

const initialState: userLogged = {}

export const userLoggedSlice = createSlice({
  name: "userLogged",
  initialState,
  reducers: {
    setUserLoggedField: (state, action) => {
      const field = Object.keys(action.payload)[1] as string
      const value = action.payload[field as keyof typeof state]
      console.log(field, value)
      state[field as keyof typeof state] = value
      // Object.assign(state, { ...action.payload })
    }
  }
})

export const { setUserLoggedField } = userLoggedSlice.actions

export default userLoggedSlice.reducer
