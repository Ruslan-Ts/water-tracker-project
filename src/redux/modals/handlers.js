export const handlerCloseModalSetting = (state, { payload }) => {
  state.isOpenModalSetting = false;
};
export const handlerCloseModalWaterRate = (state, { payload }) => {
  state.isOpenModalWaterRate = false;
};
export const handlerCloseModalAddWater = (state, { payload }) => {
  state.isOpenAddWaterModal = false;
};
export const handlerCloseModalDeleteEntry = (state, { payload }) => {
  state.isOpenDeleteEntryModal = false;
};
