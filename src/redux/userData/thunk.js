import { updateAvatar, updateWaterRate } from "API/dataAPI";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const { createAsyncThunk } = require("@reduxjs/toolkit")

export const updateWaterRateThunk = createAsyncThunk('dataUser/updateWaterRate', async (newWaterRate, { rejectWithValue }) => {
    try {
        const rate = Number(newWaterRate) * 1000;
        const { waterRate } = await updateWaterRate(rate);
        return waterRate;
    } catch (error) {
        return rejectWithValue(error.massage);
    }
}
)

export const updateAvatarThunk = createAsyncThunk('dataUser/updateAvatar', async (newPhotoFile, { rejectWithValue }) => {
    try {
        const avatarURL = await updateAvatar(newPhotoFile);
        return avatarURL;
    } catch (error) {
        return rejectWithValue(error.massage);
    }
}
)