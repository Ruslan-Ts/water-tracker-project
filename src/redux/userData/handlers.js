
export const handlerUpdateWaterRate = (state, { payload }) => {
    state.dataUser.user.waterRate = payload;
}