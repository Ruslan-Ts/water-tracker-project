import { createAsyncThunk } from '@reduxjs/toolkit';

import { addWaters, deleteEntry } from 'API/dataAPI';
import { fetchTodayAPI } from 'API/dataAPI';
import { toast } from 'react-toastify';

export const fetchTodayThunk = createAsyncThunk(
  'today/fetchTodayData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchTodayAPI();
      return response;
    } catch (error) {
      toast.error(` Try again =)`); // щось попиши
      return rejectWithValue(error.message);
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
