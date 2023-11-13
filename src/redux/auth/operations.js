import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
