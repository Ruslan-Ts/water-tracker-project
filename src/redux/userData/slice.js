const { createSlice } = require("@reduxjs/toolkit");
const { updateWaterRateThunk } = require("./thunk");
const { handlerUpdateWaterRate } = require("./handlers");

const initialState = {
    user: {},
    month,
    today,
}

const dataSlice = createSlice({
    name: 'dataUser',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(updateWaterRateThunk.fulfilled, handlerUpdateWaterRate)
    },
    reducers: {

    }
})

export const dataReducer = dataSlice.reducer;