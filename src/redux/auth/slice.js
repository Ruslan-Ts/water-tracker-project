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
    email: '',
    avatarURL: '',
    userName: '',
    gender: '',
    waterRate: '',
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
