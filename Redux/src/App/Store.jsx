import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../Features/Slice'


export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
})