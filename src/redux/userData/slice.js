import { createSlice } from '@reduxjs/toolkit';
import { fetchTodayData } from '../userData/thunk';

const initialState = {
  month: {},
  today: {
    waterInputsForToday: [],
    dailyNormFulfillment: 0,
  },
};

const dataReducer = createSlice({
  name: 'dataUser',
  initialState,
  reducers: {
    setTodayData: (state, action) => {
      state.today.waterInputsForToday = action.payload.waterInputsForToday;
      state.today.dailyNormFulfillment = action.payload.dailyNormFulfillment;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTodayData.fulfilled, (state, action) => {
      state.today.waterInputsForToday = action.payload.waterInputsForToday;
      state.today.dailyNormFulfillment = action.payload.dailyNormFulfillment;
      state.error = null;
    });
  },
});

export const { setTodayData } = dataReducer.actions;

export default dataReducer.reducer;
