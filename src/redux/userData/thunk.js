import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const { createAsyncThunk } = require("@reduxjs/toolkit")

export const updateWaterRateThunk = createAsyncThunk('', async (newWaterRate, { rejectWithValue }) => {
    try {
        rate = Number(newWaterRate) * 1000;
        const { waterRate } = await updateWaterRate(rate);
        return waterRate;
    } catch (error) {
        return rejectWithValue(error.massage);
    }

}
)