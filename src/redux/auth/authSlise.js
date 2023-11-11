import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logOut, refreshAuth, signUp, logIn } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshAuth.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addMatcher(isAnyOf(refreshAuth.pending, refreshAuth.rejected), state => {
        state.isRefreshing = !state.isRefreshing;
      })
      .addMatcher(
        isAnyOf(signUp.fulfilled, logIn.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
