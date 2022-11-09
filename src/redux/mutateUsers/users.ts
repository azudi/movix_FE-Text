import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { types } from '../../components/constant/actionConstant'

export interface CounterState {
  checkedUsers: Array<any>
  Allusers: Array<any>
  displayedUser: Array<any>
  fixedState: Array<any>
  filterStringRef: string
  userStatusString: string
}

const initialState: CounterState = {
  checkedUsers: [],
  Allusers: [],
  displayedUser: [],
  fixedState: [],
  filterStringRef: '',
  userStatusString: '',
}

export const navToggleSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    Users: (state, action) => {
      const { type, payload } = action
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      switch (payload.action) {
        case types.ADD_USER:
          state.checkedUsers = [...state.checkedUsers, payload.user]
          break

        case types.REMOVE_USER:
          let filteredUser = state.checkedUsers.filter(
            (item, index) => item != payload.id,
          )
          state.checkedUsers = [...filteredUser]
          break
      }
    },
    mutateUsers: (state, action) => {
      const { type, payload } = action

      switch (payload.action) {
        case types.RANGE_USER:
          let rangeUser = state.Allusers.filter(
            (item, index) =>
              index >= payload.start && index < payload.end + payload.start,
          )
          state.displayedUser = [...rangeUser]
          console.log(payload.end, payload.start)
          break
      }
    },

    mutateAllSAtate: (state, action) => {
      const { type, payload } = action

      let AllUserr = payload.allUsers
      state.Allusers = [...AllUserr]
    },

    fixedState: (state, action) => {
      const { type, payload } = action

      let fixedUser = payload.fixedUsers
      state.fixedState = [...fixedUser]
    },

    resetFixedState: (state, action) => {
      const { type, payload } = action

      let cloneUser = state.fixedState
      let cloneAllUsers = cloneUser.filter(
        (item: any, index: number) =>
          (payload.action.toLowerCase() == ''
            ? true
            : item.paymentStatus == payload.action.toLowerCase()) &&
          (state.userStatusString.toLowerCase() == ''
            ? true
            : item.userStatus == state.userStatusString.toLowerCase()),
      )
      state.filterStringRef = payload.action
      state.Allusers = [...cloneAllUsers]
      console.log('clone-users', state.Allusers)
    },

    stateResetStaus: (state, action) => {
      const { type, payload } = action

      let cloneUser = state.fixedState
      let cloneAllUsers = cloneUser.filter(
        (item: any, index: number) =>
          (payload.action.toLowerCase() == ''
            ? true
            : item.userStatus == payload.action.toLowerCase()) &&
          (state.filterStringRef.toLowerCase() == ''
            ? true
            : item.paymentStatus == state.filterStringRef.toLowerCase()),
      )
      state.userStatusString = payload.action
      state.Allusers = [...cloneAllUsers]
      console.log('clone-users', state.Allusers)
    },
    sortUsers: (state, action) => {
      const { type, payload } = action
      switch (payload.sort) {
        case 'firstname':
          state.Allusers = state.Allusers.sort((a, b) =>
            a.firstName.localeCompare(b.firstName),
          )
          break
        case 'lastname':
          state.Allusers = state.Allusers.sort((a, b) =>
            a.lastName.localeCompare(b.lastName),
          )
          break
        case 'duedate':
          state.Allusers = state.Allusers.sort((a, b) =>
            a?.dueDate.localeCompare(b.dueDate),
          )
          break
        case 'lastlogin':
          state.Allusers = state.Allusers.sort((a, b) =>
            a?.lastLogin.localeCompare(b.lastLogin),
          )
          break
        case 'all':
          state.Allusers = state.Allusers.sort((a, b) =>
            a?.id.localeCompare(b.id),
          )
          break
      }
      // state.Allusers = [...cloneAllUsers]
    },

    searchUsers: (state, action) => {
      const { type, payload } = action
      let cloneUser = state.fixedState

      switch (payload.search) {
        case 'firstname':
          state.Allusers = cloneUser.filter((item, index) =>
            item.firstName.toLowerCase().includes(payload.val),
          )
          break
        case 'email':
          state.Allusers = cloneUser.filter((item, index) =>
            item.email.toLowerCase().includes(payload.val),
          )
          break
        case 'lastlogin':
          state.Allusers = cloneUser.filter((item, index) =>
            item.lastLogin.includes(payload.val),
          )
          break
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  Users,
  mutateUsers,
  mutateAllSAtate,
  fixedState,
  resetFixedState,
  sortUsers,
  stateResetStaus,
  searchUsers,
} = navToggleSlice.actions

export default navToggleSlice.reducer
