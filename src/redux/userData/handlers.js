export const setTodayData = (state, action) => {
  state.waterInputsForToday = action.payload.waterInputsForToday;
  state.dailyNormFulfillment = action.payload.dailyNormFulfillment;
};

export const handlerAddWater = (
  state,
  { payload: { _id, waterVolume, date, owner } }
) => {
  state.today.waterInputsForToday.push({ _id, waterVolume, date, owner });
};

export const handlerDeleteWater = (state, { payload }) => {
  state.today.waterInputsForToday = state.today.waterInputsForToday.filter(
    data => data._id !== payload
  );
};
