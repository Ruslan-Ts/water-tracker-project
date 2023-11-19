import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTodayAPI } from 'API/dataAPI';
import { toast } from 'react-toastify';



export const fetchTodayThunk = createAsyncThunk('today/fetchTodayData', async (_, { rejectWithValue }) => {
  try {
    const response = await fetchTodayAPI()
    return response;

  } catch (error) {
    toast.error(` Try again =)`); // щось попиши
    return rejectWithValue(error.message);
  }
}
);
