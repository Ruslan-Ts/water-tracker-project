const { createSlice } = require("@reduxjs/toolkit");
const { updateWaterRateThunk, updateAvatarThunk, updateUserProfileThunk } = require("./thunk");
const { handlerUpdateWaterRate, handlerUpdateAvatar, handlerUpdateUserProfile } = require("./handlers");

const initialState = {
    user: {
        email: "peralat152@undewp.com",
        avatarURL: "http://res.cloudinary.com/djujpexdy/image/upload/v1699882245/water-tracker/avatars/655110e230a7d57b4b6acc8f_avatar.jpg",
        userName: "David",
        gender: "man",
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
            .addCase(updateUserProfileThunk.fulfilled, handlerUpdateUserProfile)
    },
    reducers: {

    }
})

export const dataReducer = dataSlice.reducer;