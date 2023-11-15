import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateAvatar, updateWaterRate, updateUserProfile } from "API/authAPI";

import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', userData);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', userData);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    removeToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.massage);
  }
});

export const refreshAuth = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue('User is not found');
    }
    try {
      setToken(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

// *** Work with UP Profile, UP Water Rate, UP Avatar ***

export const updateWaterRateThunk = createAsyncThunk('auth/updateWaterRate', async (newWaterRate, { rejectWithValue }) => {
  try {
    const rate = Number(newWaterRate) * 1000;
    const { waterRate } = await updateWaterRate(rate);
    return waterRate;
  } catch (error) {
    return rejectWithValue(error.massage);
  }
}
)

export const updateAvatarThunk = createAsyncThunk('auth/updateAvatar', async (newPhotoFile, { rejectWithValue }) => {
  try {
    console.log(1);
    const avatarURL = await updateAvatar(newPhotoFile);
    return avatarURL;
  } catch (error) {
    return rejectWithValue(error.massage);
  }
}
)

export const updateUserProfileThunk = createAsyncThunk('auth/UserProfile', async (newProfile, { rejectWithValue }) => {
  try {
    const response = await updateUserProfile(newProfile);
    return response
  } catch (error) {
    switch (error.response.status) {
      case 409:
        toast.error(`This email is already in use by another user. Please try a different address.`);
        return rejectWithValue(error.massage);
      case 401:
        toast.error(`The old password is incorrect. Please try entering the correct password.`);
        return rejectWithValue(error.massage);
      default:
        return rejectWithValue(error.massage);
    }

  }
}
)