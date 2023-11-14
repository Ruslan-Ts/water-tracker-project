export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectorWaterRate = state => state.auth.user.waterRate;
export const selectorUserProfile = state => state.auth.user;
