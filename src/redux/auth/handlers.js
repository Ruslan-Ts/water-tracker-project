export const handleAuth = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
};

export const handleLogout = (state, { payload }) => {
  state.user = {};
  state.token = null;
};

export const handlePendingRefresh = (state, { payload }) => {
  state.isRefreshing = true;
};

export const handleRefresh = (state, { payload }) => {
  state.user = payload;
  state.isRefreshing = false;
};

export const handleRefreshReject = (state, { payload }) => {
  state.user = {};
  state.token = null;
  state.isRefreshing = true;
};

export const handlerUpdateWaterRate = (state, { payload }) => {
  state.user.waterRate = payload;
};

export const handlerUpdateAvatar = (state, { payload }) => {
  state.user.avatarURL = payload;
};

export const handlerUpdateUserProfile = (
  state,
  { payload: { gender, userName, email } }
) => {
  state.user.gender = gender;
  state.user.userName = userName;
  state.user.email = email;
};

export const handlePending = (state, { payload }) => {
  state.isLoading = true;
};
export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
};
export const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
};



