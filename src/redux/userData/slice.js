const { createSlice } = require('@reduxjs/toolkit');
const { setTodayData } = require('../../redux/userData/handlers');

const todaySlice = createSlice({
  name: 'today',
  initialState: {
    waterInputsForToday: [],
    dailyNormFulfillment: 0,
  },
  reducers: {
    setTodayData,
  },
});

export const { setTodayData: setTodayDataAction } = todaySlice.actions;
export const todayReducer = todaySlice.reducer;
