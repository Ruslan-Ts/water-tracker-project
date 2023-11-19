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
    builder.addCase(fetchTodayThunk.fulfilled, handleFetchToday);
  },
});

export const dataReducer = dataSlice.reducer;
