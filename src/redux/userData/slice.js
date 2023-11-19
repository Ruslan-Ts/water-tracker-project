const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  month: {},
  today: {
    waterInputsForToday: [
      {
        _id: '6555036784527fa976e759dc',
        waterVolume: 1900,
        date: '2023-11-15T17:07:57.705Z',
        owner: '6555014c84527fa976e759bd',
      },
      {
        _id: '6555037884527fa976e759e0',
        waterVolume: 1900,
        date: '2023-11-15T17:07:57.705Z',
        owner: '6555014c84527fa976e759bd',
      },
      {
        _id: '6555037984527fa976e759e3',
        waterVolume: 1900,
        date: '2023-11-15T17:07:57.705Z',
        owner: '6555014c84527fa976e759bd',
      },
      {
        _id: '6555037a84527fa976e759e6',
        waterVolume: 1900,
        date: '2023-11-15T17:07:57.705Z',
        owner: '6555014c84527fa976e759bd',
      },
      {
        _id: '6555037c84527fa976e759e9',
        waterVolume: 1900,
        date: '2023-11-15T17:07:57.705Z',
        owner: '6555014c84527fa976e759bd',
      },
    ],
    dailyNormFulfillment: 615,
  },
};

const dataSlice = createSlice({
  name: 'dataUser',
  initialState,
  extraReducers: builder => {},
  reducers: {},
});

export const dataReducer = dataSlice.reducer;
