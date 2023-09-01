import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  games: [],
  stake: null,
  status: 'pending',
  playerId: localStorage.getItem('accountId'),
  accumulatedOdds: null,
  betType: 'straight',
  toWin: null,
};

const wagerSlice = createSlice({
  name: 'wagers',
  initialState,
  reducers: {
    placeWager: (state, action) => {
      const newState = { ...state };
      return newState;
    },
    addToGames: (state, action) => {
      // state.games = [...state.games, action.payload.game]
      state.games = [action.payload.game];
      state.stake = action.payload.stake;
    },
  },
});

export const { placeWager, addToGames } = wagerSlice.actions;
export default wagerSlice.reducer;
