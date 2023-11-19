import { handlerAddWater, handlerDeleteWater } from './handlers';
import { addWatersThunk, deleteEntryThunk } from './thunk';
import { createSlice } from '@reduxjs/toolkit';
import { fetchTodayThunk } from '../userData/thunk';
import { handleFetchToday } from './handlers';

const initialState = {
  month: {},
  today: {
    waterInputsForToday: [],
    dailyNormFulfillment: 0,
  },
};

const dataSlice = createSlice({
  name: 'dataUser',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTodayThunk.fulfilled, handleFetchToday)
      .addCase(addWatersThunk.fulfilled, handlerAddWater)
      .addCase(deleteEntryThunk.fulfilled, handlerDeleteWater);
  },
});

export const dataReducer = dataSlice.reducer;
