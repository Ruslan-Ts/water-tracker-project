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

export const handleFetchMonth = (state, { payload }) => {
  state.month = payload;
};

export const handleEditWater = (state, { payload }) => {
  const array = state.today.waterInputsForToday;
  let indexChange;
  for (let index = 0; index < array.length; index++) {
    if (array[index]._id === payload._id) {
      indexChange = index;
      break;
      ;
    }
  }
  array[indexChange] = payload
};
