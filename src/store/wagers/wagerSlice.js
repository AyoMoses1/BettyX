import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  wagers: [0, 1 , 2, 3, 4, 5, 6, 7],
};


const wagerSlice = createSlice({
  name: 'wagers',
  initialState,
  reducers: {
    placeWager: (state) => {
      const newState = { ...state };
      console.log({ newState });
      return newState;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBooks.fulfilled, (state, action) => {
  //     const newState = { ...state };
  //     newState.books = action.payload;
  //     return newState;
  //   });
  //   builder.addCase(addBook.fulfilled, (state, action) => {
  //     state.books.push(action.payload);
  //   });
  //   builder.addCase(removeBook.fulfilled, (state, action) => {
  //     const newState = { ...state };
  //     newState.books = state.books.filter((book) => book.item_id !== action.payload);
  //     return newState;
  //   });
  // },
});

export const { placeWager } = wagerSlice.actions;
export default wagerSlice.reducer;
