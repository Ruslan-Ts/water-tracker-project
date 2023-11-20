import { deleteEntryThunk } from 'redux/userData/thunk';
import {

  handlerCloseModalDeleteEntry,
} from './handlers';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  isOpenDeleteEntryModal: false,

};

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    isOpenDeleteEntryModal: (state, { payload }) => {
      state.isOpenDeleteEntryModal = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(deleteEntryThunk.fulfilled, handlerCloseModalDeleteEntry);
  },
});

export const modalReducer = modalSlice.reducer;
export const { isOpenDeleteEntryModal } =
  modalSlice.actions;
