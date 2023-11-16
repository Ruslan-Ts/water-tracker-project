import { createSlice } from '@reduxjs/toolkit';
import {
  logOutThunk,
  signUpThunk,
  signInThunk,
  updateWaterRateThunk,
  updateAvatarThunk,
  updateUserProfileThunk,
  refreshUserThunk,
  resetPasswordThunk,
} from './thunk';
import {
  handlerUpdateWaterRate,
  handlerUpdateAvatar,
  handlerUpdateUserProfile,
  handleAuth,
  handleLogout,
  handleRefresh,
  handleRefreshReject,
  handlePendingRefresh,
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
  stayAuth: false,
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
      .addCase(signUpThunk.fulfilled, handleAuth)
      .addCase(signInThunk.fulfilled, handleAuth)
      .addCase(logOutThunk.fulfilled, handleLogout)
      .addCase(refreshUserThunk.pending, handlePendingRefresh)
      .addCase(refreshUserThunk.fulfilled, handleRefresh)
      .addCase(refreshUserThunk.rejected, handleRefreshReject)
      .addCase(resetPasswordThunk.fulfilled, handleLogout);
  },
});

export const authReducer = authSlice.reducer;
