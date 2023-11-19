import { addWatersThunk, deleteEntryThunk } from 'redux/userData/thunk';

import {
  handlerCloseModalAddWater,
  handlerCloseModalDeleteEntry,
} from './handlers';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  isOpenDeleteEntryModal: false,
  isOpenAddWaterModal: false,
};

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    isOpenDeleteEntryModal: (state, { payload }) => {
      state.isOpenDeleteEntryModal = payload;
    },
    isOpenAddWaterModal: (state, { payload }) => {
      state.isOpenAddWaterModal = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(deleteEntryThunk.fulfilled, handlerCloseModalDeleteEntry);
    builder.addCase(addWatersThunk.fulfilled, handlerCloseModalAddWater);
  },
});

export const modalReducer = modalSlice.reducer;
export const { isOpenDeleteEntryModal, isOpenAddWaterModal } =
  modalSlice.actions;
