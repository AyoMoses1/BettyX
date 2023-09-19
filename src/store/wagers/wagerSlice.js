import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  games: [],
  parlay: [],
  stake: null,
  status: 'pending',
  accumulatedOdds: null,
  betType: '',
  toWin: null,
};

const wagerSlice = createSlice({
  name: 'wagers',
  initialState,
  reducers: {
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
        state.parlay.splice(existingIndex, 1);
      } else {
        state.parlay.push(payload);
      }
    },
    resetWagerState: (state) => {
      return { ...initialState };
    },
  },
});

export const { addToGames, addToGamesForParlay, resetWagerState } =
  wagerSlice.actions;
export default wagerSlice.reducer;
