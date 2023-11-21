import { createAsyncThunk } from '@reduxjs/toolkit';

import { editWaters, addWaters, deleteEntry } from 'API/dataAPI';
import { fetchTodayAPI } from 'API/dataAPI';
import { fetchMonthAPI } from 'API/dataAPI';
import { toast } from 'react-toastify';

export const fetchTodayThunk = createAsyncThunk(
  'today/fetchTodayData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchTodayAPI();
      return response;
    } catch (error) {
      toast.error(` Something's wrong. Go get more water!`);
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMonthThunk = createAsyncThunk(
  'month/fetchTodayData',
  async (month, { rejectWithValue }) => {
    try {
      const response = await fetchMonthAPI(month);
      return response;
    } catch (error) {
      toast.error(` Something's wrong. Unable to show month data!`);
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
      return rejectWithValue(error.message);
    }
  }
);
export const editWatersThunk = createAsyncThunk(
  'water/editWaters',
  async ({ _id, newWaterUsed }, { rejectWithValue }) => {
    try {
      const data = await editWaters(_id, newWaterUsed);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
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
      return rejectWithValue(error.message);
    }
  }
);
