export const handleAuth = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
};

export const handleLogout = (state, { payload }) => {
  state.user = null;
  state.token = null;
};

export const handleRefresh = (state, { payload }) => {
  state.user = payload;
  state.isRefreshing = true;
};

export const handlerUpdateWaterRate = (state, { payload }) => {
  state.dataUser.user.waterRate = payload;
};

export const handlerUpdateAvatar = (state, { payload }) => {
  state.user.avatarURL = payload;
};

export const handlerUpdateUserProfile = (state, { payload }) => {
  state.user.waterRate = 3111;
};
