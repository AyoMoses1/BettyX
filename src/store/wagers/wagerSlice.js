import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  games: [],
  parlay: [],
  stake: null,
  status: 'pending',
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
      state.games = [action.payload.game];
      state.stake = action.payload.stake;
      state.playerId = action.payload.playerId;
    },
    addToGamesForParlay: (state, action) => {
      const { payload } = action;
      const existingIndex = state.parlay.findIndex(
        (item) => item.eventId === payload.eventId
      );
      if (existingIndex !== -1) {
        // state.parlay[existingIndex] = payload;
        state.parlay.splice(existingIndex, 1);
      } else {
        state.parlay.push(payload);
      }
      state.betType = 'parlay';
    },
  },
});

export const { placeWager, addToGames, addToGamesForParlay } =
  wagerSlice.actions;
export default wagerSlice.reducer;
