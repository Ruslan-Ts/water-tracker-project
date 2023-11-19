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
export const handleFetchToday = (state, { payload }) => {
  state.today.waterInputsForToday = payload.waterInputsForToday;
  state.today.dailyNormFulfillment = payload.dailyNormFulfillment;
};
