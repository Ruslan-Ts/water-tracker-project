import { updateUserProfileThunk } from "redux/auth/thunk";
import { handlerCloseModalSetting } from "./handlers";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isOpenModalSetting: true,
    isOpenModalWaterRate: false,
}

const modalSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        isOpenModalSetting: (state, { payload }) => { state.isOpenModalSetting = payload },
        isOpenModalWaterRate: (state, { payload }) => { state.isOpenModalSetting = payload },
    },
    extraReducers: (builder) => {
        builder.addCase(updateUserProfileThunk.fulfilled, handlerCloseModalSetting);
    }
})

export const modalReducer = modalSlice.reducer;
export const { isOpenModalSetting, isOpenModalWaterRate } = modalSlice.actions;