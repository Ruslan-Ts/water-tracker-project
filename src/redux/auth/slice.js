import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logOut, refreshAuth, signUp, logIn, updateWaterRateThunk, updateAvatarThunk, updateUserProfileThunk } from './thunk';
import { handlerUpdateWaterRate, handlerUpdateAvatar, handlerUpdateUserProfile } from "./handlers.js";

const initialState = {
  user: {
    email: "peralat152@undewp.com",
    avatarURL: "http://res.cloudinary.com/djujpexdy/image/upload/v1699882245/water-tracker/avatars/655110e230a7d57b4b6acc8f_avatar.jpg",
    userName: "David",
    gender: "male",
    waterRate: 1111
  },
  token: null,
  isLoading: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(updateWaterRateThunk.fulfilled, handlerUpdateWaterRate)
      .addCase(updateAvatarThunk.fulfilled, handlerUpdateAvatar)
      .addCase(updateUserProfileThunk.fulfilled, handlerUpdateUserProfile)

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
