import { createReducer } from '@reduxjs/toolkit'
import { loadUser, clearErrors } from '../actions/user.js'

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  error: null,
}

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUser.pending, (state) => {
      state.loading = true
    })
    .addCase(loadUser.fulfilled, (state, action) => {
      state.isAuthenticated = true
      state.loading = false
      state.user = action.payload
      state.error = null
    })
    .addCase(loadUser.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
      state.isAuthenticated = false
      state.user = null
    })
    .addCase(clearErrors, (state) => {
      state.error = null
    })
})
