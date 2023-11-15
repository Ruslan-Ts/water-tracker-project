

export const handlerUpdateWaterRate = (state, { payload }) => {
    state.dataUser.user.waterRate = payload;
}

export const handlerUpdateAvatar = (state, { payload }) => {
    state.user.avatarURL = payload;

}

export const handlerUpdateUserProfile = (state, { payload }) => {
    state.user.waterRate = 3111;
}
