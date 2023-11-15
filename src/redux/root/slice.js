import { createSlice } from '@reduxjs/toolkit';
import { handleFulfilled, handlePending, handleRejected } from './handlers';

const initialState = {
  isLoading: false,
  error: '',
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const rootReducer = rootSlice.reducer;
