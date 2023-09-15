// userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authAxios as axios } from 'setup/auth/axios';

// Define an initial state for the user slice
const initialState = {
  user: null, // Holds user data
  status: 'idle', // Fetch status: 'idle', 'loading', 'succeeded', 'failed'
  error: null, // Error message if fetch fails
};

// Define an async thunk to fetch user data
export const fetchUser = createAsyncThunk('user/fetchUser', async (userId) => {
  try {
    const response = await axios.get(`/player/${userId}`);
    return response?.data?.player; // Assuming your API returns user data in the response
  } catch (error) {
    throw error;
  }
});

// Create the user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserBalance: (state, action) => {
      if (state.user) {
        state.user.available -= action.payload;
        return state;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { updateUserBalance } = userSlice.actions;

export default userSlice.reducer;
