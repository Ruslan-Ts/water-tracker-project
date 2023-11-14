const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isOpenModalSetting: false,
    isOpenModalWaterRate: false,
}

const modalSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        isOpenModalSetting: (state, { payload }) => { state.isOpenModalSetting = payload },
        isOpenModalWaterRate: (state, { payload }) => { state.isOpenModalSetting = payload },
    }
})

export const modalReducer = modalSlice.reducer;
export const { isOpenModalSetting, isOpenModalWaterRate } = modalSlice.actions;