import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { addWaters, deleteEntry } from 'API/dataAPI';

axios.defaults.baseURL = 'https://';

export const fetchTodayData = createAsyncThunk(
  'today/fetchTodayData',
  async () => {
    try {
      const response = await axios.get(
        'https://water-tracker-backend.onrender.com/api/today/'
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const addWatersThunk = createAsyncThunk(
  'water/addWaters',
  async (newWaterUsed, { rejectWithValue }) => {
    try {
      const data = await addWaters(newWaterUsed);
      return data;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

export const deleteEntryThunk = createAsyncThunk(
  'water/deleteEntry',
  async (waterId, { rejectWithValue }) => {
    try {
      await deleteEntry(waterId);
      return waterId;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);
