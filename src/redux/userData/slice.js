const { createSlice } = require("@reduxjs/toolkit");
const { updateWaterRateThunk, updateAvatarThunk } = require("./thunk");
const { handlerUpdateWaterRate, handlerUpdateAvatar } = require("./handlers");

const initialState = {
    user: {
        email: "peralat152@undewp.com",
        avatarURL: "http://res.cloudinary.com/djujpexdy/image/upload/v1699882245/water-tracker/avatars/655110e230a7d57b4b6acc8f_avatar.jpg",
        userName: "David",
        gender: "female",
        waterRate: 1111
    },
    month: '',
    today: '',
}

const dataSlice = createSlice({
    name: 'dataUser',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(updateWaterRateThunk.fulfilled, handlerUpdateWaterRate)
            .addCase(updateAvatarThunk.fulfilled, handlerUpdateAvatar)

    },
    reducers: {

    }
})

export const dataReducer = dataSlice.reducer;