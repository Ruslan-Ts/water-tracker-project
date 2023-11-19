import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodayData = createAsyncThunk(
  'today/fetchTodayData',
  async () => {
    try {
      const response = await axios.get(
        'https://water-tracker-backend.onrender.com/api/today/'
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
