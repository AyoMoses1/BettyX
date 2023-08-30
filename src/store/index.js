import { configureStore } from '@reduxjs/toolkit';
import wagersReducer from './wagers/wagerSlice';

const store = configureStore({
  reducer: {
    wagersReducer,
  },
});

export default store;
