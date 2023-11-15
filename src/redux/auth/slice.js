import { createSlice } from '@reduxjs/toolkit';
import {
  logOut,
  signUp,
  signIn,
  updateWaterRateThunk,
  updateAvatarThunk,
  updateUserProfileThunk,
} from './thunk';
import {
  handlerUpdateWaterRate,
  handlerUpdateAvatar,
  handlerUpdateUserProfile,
  handleAuth,
  handleLogout,
} from './handlers.js';

const initialState = {
  user: {
    email: 'peralat152@undewp.com',
    avatarURL:
      'http://res.cloudinary.com/djujpexdy/image/upload/v1699882245/water-tracker/avatars/655110e230a7d57b4b6acc8f_avatar.jpg',
    userName: 'David',
    gender: 'man',
    waterRate: 1111,
  },
  token: null,
  isAuth: false,
  stayAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(updateWaterRateThunk.fulfilled, handlerUpdateWaterRate)
      .addCase(updateAvatarThunk.fulfilled, handlerUpdateAvatar)
      .addCase(updateUserProfileThunk.fulfilled, handlerUpdateUserProfile)
      .addCase(signUp.fulfilled, handleAuth)
      .addCase(signIn.fulfilled, handleAuth)
      .addCase(logOut.fulfilled, handleLogout);
  },
});

export const authReducer = authSlice.reducer;
