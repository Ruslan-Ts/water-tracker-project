import { addWatersThunk, deleteEntryThunk } from 'redux/userData/thunk';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  isOpenModalSetting: false,
  isOpenModalWaterRate: false,
  isOpenDeleteEntryModal: false,
  isOpenAddWaterModal: false,
};

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    isOpenModalSetting: (state, { payload }) => {
      state.isOpenModalSetting = payload;
    },
    isOpenModalWaterRate: (state, { payload }) => {
      state.isOpenModalSetting = payload;
    },
    isOpenDeleteEntryModal: (state, { payload }) => {
      state.isOpenDeleteEntryModal = payload;
    },
    isOpenAddWaterModal: (state, { payload }) => {
      state.isOpenAddWaterModal = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(deleteEntryThunk.fulfilled, state => {
        state.isOpenDeleteEntryModal = false;
      })
      .addCase(addWatersThunk.fulfilled, state => {
        state.isOpenAddWaterModal = false;
      });
  },
});

export const modalReducer = modalSlice.reducer;
export const {
  isOpenModalSetting,
  isOpenModalWaterRate,
  isOpenDeleteEntryModal,
  isOpenAddWaterModal,
} = modalSlice.actions;
