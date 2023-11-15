export const handlePending = (state, { payload }) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

export const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
};
