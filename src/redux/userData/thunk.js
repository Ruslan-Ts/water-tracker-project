import { createAsyncThunk } from '@reduxjs/toolkit';

import { addWaters, deleteEntry } from 'API/dataAPI';

import axios from 'axios';

axios.defaults.baseURL = 'https://';

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
