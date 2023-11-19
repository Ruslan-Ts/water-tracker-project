export const handleFetchToday = (state, { payload }) => {
  state.today.waterInputsForToday = payload.waterInputsForToday;
  state.today.dailyNormFulfillment = payload.dailyNormFulfillment;
};