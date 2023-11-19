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
