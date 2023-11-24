import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  updateAvatar,
  updateWaterRate,
  updateUserProfile,
  signup,
  signin,
  logout,
  refreshUser,
  resetPassword,
} from 'API/authAPI';

// *** Work with SingIN, SingUP logOut refreshUser, resetPassword  ***

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signup(body);
      return data;
    } catch (error) {
      switch (error.response.status) {
        case 409:
          toast.error(
            `This email is already in use by another user. Please try a different address.`
          );
          return rejectWithValue(error.massage);
        case 400:
          toast.error(
            `The password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character`
          );
          return rejectWithValue(error.massage);

        default:
          return rejectWithValue(error.message);
      }
    }
  }
);

export const signInThunk = createAsyncThunk(
  'auth/logIn',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signin(body);
      return data;
    } catch (error) {
      toast.error(`Email or password is wrong. Try again =)`);
      return rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await logout();
      return;
    } catch (error) {
      toast.error(`Error! User not logged in!`);
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        auth: { token },
      } = getState();
      const data = await refreshUser(token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const {
        auth: { token },
      } = thunkApi.getState();
      if (!token) {
        return false;
      }
    },
  }
);

export const resetPasswordThunk = createAsyncThunk(
  'auth/reset-password',
  async ({ email, setNavigate }, { rejectWithValue }) => {
    try {
      await resetPassword(email);
      setNavigate(true);
      toast.success(
        `The email has been sent successfully.`
      );
    } catch (error) {
      toast.error(`Error! User with this email not found!`);
      return rejectWithValue(error.message);
    }
  }
);


// *** Work with UP Profile, UP Water Rate, UP Avatar ***

export const updateWaterRateThunk = createAsyncThunk(
  'auth/updateWaterRate',
  async (newWaterRate, { rejectWithValue }) => {
    try {
      const rate = Number(newWaterRate) * 1000;
      const { waterRate } = await updateWaterRate(rate);
      return waterRate;
    } catch (error) {
      toast.error(`Unfortunately, the Water Rate did not upload successfully. Please try again later.`);
      return rejectWithValue(error.massage);
    }
  }
);

export const updateAvatarThunk = createAsyncThunk(
  'auth/updateAvatar',
  async (newPhotoFile, { rejectWithValue }) => {
    try {
      const avatarURL = await updateAvatar(newPhotoFile);
      toast.success(
        `The photo has been successfully uploaded.`
      );
      return avatarURL;
    } catch (error) {
      toast.error(`Unfortunately, the photo did not upload successfully. Please try again later.`);
      return rejectWithValue(error.massage);
    }
  }
);

export const updateUserProfileThunk = createAsyncThunk(
  'auth/UserProfile',
  async (newProfile, { rejectWithValue }) => {
    try {
      const response = await updateUserProfile(newProfile);
      return response;
    } catch (error) {
      switch (error.response.status) {
        case 409:
          toast.error(
            `This email is already in use by another user. Please try a different address.`
          );
          return rejectWithValue(error.massage);
        case 401:
          toast.error(
            `The old password is incorrect. Please try entering the correct password.`
          );
          return rejectWithValue(error.massage);
        default:
          toast.error(`Error. Please try again later.`);
          return rejectWithValue(error.massage);
      }
    }
  }
);
