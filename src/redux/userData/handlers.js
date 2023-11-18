export const setTodayData = (state, action) => {
  state.waterInputsForToday = action.payload.waterInputsForToday;
  state.dailyNormFulfillment = action.payload.dailyNormFulfillment;
};
