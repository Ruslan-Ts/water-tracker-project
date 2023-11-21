import {
  handleEditWater,
  handlerAddWater,
  handlerDeleteWater,
} from './handlers';
import {
  addWatersThunk,
  deleteEntryThunk,
  editWatersThunk,
  fetchMonthThunk,
} from './thunk';
import { createSlice } from '@reduxjs/toolkit';
import { fetchTodayThunk } from '../userData/thunk';
import { handleFetchToday, handleFetchMonth } from './handlers';

const initialState = {
  month: [],
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
      .addCase(fetchMonthThunk.fulfilled, handleFetchMonth)
      .addCase(addWatersThunk.fulfilled, handlerAddWater)
      .addCase(deleteEntryThunk.fulfilled, handlerDeleteWater)
      .addCase(editWatersThunk.fulfilled, handleEditWater);
  },
});

export const dataReducer = dataSlice.reducer;
