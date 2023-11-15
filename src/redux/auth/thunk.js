import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  updateAvatar,
  updateWaterRate,
  updateUserProfile,
  signup,
  signin,
  logout,
} from 'API/authAPI';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (body, thunkApi) => {
    try {
      const data = signup(body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

export const signIn = createAsyncThunk('auth/logIn', async (body, thunkApi) => {
  try {
    const data = await signin(body);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.massage);
  }
});

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkApi) => {
  try {
    await logout();
    return;
  } catch (error) {
    return thunkApi.rejectWithValue(error.massage);
  }
});

// export const refreshAuth = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkApi) => {
//     try {
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.massage);
//     }
//   },
//   {
//     condition: (_, thunkApi) => {
//       const state = thunkApi.getState();
//       const token = state.auth.token;
//       if (!token) {
//         return false;
//       }
//     },
//   }
// );

// *** Work with UP Profile, UP Water Rate, UP Avatar ***

export const updateWaterRateThunk = createAsyncThunk(
  'auth/updateWaterRate',
  async (newWaterRate, { rejectWithValue }) => {
    try {
      const rate = Number(newWaterRate) * 1000;
      const { waterRate } = await updateWaterRate(rate);
      return waterRate;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

export const updateAvatarThunk = createAsyncThunk(
  'auth/updateAvatar',
  async (newPhotoFile, { rejectWithValue }) => {
    try {
      console.log(1);
      const avatarURL = await updateAvatar(newPhotoFile);
      return avatarURL;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

export const updateUserProfileThunk = createAsyncThunk(
  'auth/UserProfile',
  async (newPhotoFile, { rejectWithValue }) => {
    try {
      const avatarURL = await updateUserProfile(newPhotoFile);
      return avatarURL;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);
