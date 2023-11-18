import { handlerAddWater, handlerDeleteWater } from './handlers';
import { addWatersThunk, deleteEntryThunk } from './thunk';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  month: {},
  today: { waterInputsForToday: [] },
  isLoading: false,
};

const dataSlice = createSlice({
  name: 'dataUser',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addWatersThunk.fulfilled, handlerAddWater)
      .addCase(deleteEntryThunk.fulfilled, handlerDeleteWater);
  },
  reducers: {},
});

export const dataReducer = dataSlice.reducer;
