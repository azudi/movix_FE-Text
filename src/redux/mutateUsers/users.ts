import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { types } from '../../components/constant/actionConstant'

export interface CounterState {
  checkedUsers: Boolean
}

const initialState: CounterState = {
  checkedUsers: false
}

export const navToggleSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    isLoggedIn: (state, action) => {
      const { type, payload } = action
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
       state.checkedUsers = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  isLoggedIn
} = navToggleSlice.actions

export default navToggleSlice.reducer
