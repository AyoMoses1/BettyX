import { configureStore } from '@reduxjs/toolkit';
import wagersReducer from './wagers/wagerSlice';
import userReducer from './users/userSlice';

const store = configureStore({
  reducer: {
    wagersReducer,
    userReducer
  },
});

export default store;
