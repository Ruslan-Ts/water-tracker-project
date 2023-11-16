
import { updateUserProfileThunk, updateWaterRateThunk } from "redux/auth/thunk";
import { handlerCloseModalSetting, handlerCloseModalWaterRate } from "./handlers";


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

    isOpenModalSetting: (state, { payload }) => { state.isOpenModalSetting = payload },
    isOpenModalWaterRateAction: (state, { payload }) => { state.isOpenModalWaterRate = payload },

    isOpenDeleteEntryModal: (state, { payload }) => {
      state.isOpenDeleteEntryModal = payload;
    },
    isOpenAddWaterModal: (state, { payload }) => {
      state.isOpenAddWaterModal = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(updateUserProfileThunk.fulfilled, handlerCloseModalSetting);
    builder.addCase(updateWaterRateThunk.fulfilled, handlerCloseModalWaterRate);

  }
})


export const modalReducer = modalSlice.reducer;
export const {
  isOpenModalSetting,
  isOpenModalWaterRateAction,
  isOpenDeleteEntryModal,
  isOpenAddWaterModal,
} = modalSlice.actions;
