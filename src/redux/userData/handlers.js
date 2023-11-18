export const handlerAddWater = (
  state,
  { payload: { _id, waterVolume, date, owner } }
) => {
  state.today.push({ _id, waterVolume, date, owner });
};

export const handlerDeleteWater = (state, { payload }) => {
  //   state.today = state.today.filter(data => data.id !== action.payload.id);
};
