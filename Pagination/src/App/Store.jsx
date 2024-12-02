import { configureStore } from '@reduxjs/toolkit';
import sliceReducer from './Slice';

export const store = configureStore({
  reducer: {
    slice: sliceReducer,
  },
});
