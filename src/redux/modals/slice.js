const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  isOpenModalSetting: false,
  isOpenModalWaterRate: false,
  isOpenDeleteEntryModal: false, //если что удалить//
};

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    isOpenModalSetting: (state, { payload }) => {
      state.isOpenModalSetting = payload;
    },
    isOpenModalWaterRate: (state, { payload }) => {
      state.isOpenModalWaterRate = payload;
    },
    isOpenDeleteEntryModal: (state, { payload }) => {
      state.isOpenDeleteEntryModal = payload;
    },
    isOpenAddWaterModal: (state, { payload }) => {
      state.isOpenAddWaterModal = payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const {
  isOpenModalSetting,
  isOpenModalWaterRate,
  isOpenDeleteEntryModal,
  isOpenAddWaterModal,
} = modalSlice.actions;
