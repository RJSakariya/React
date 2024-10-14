import { configureStore } from '@reduxjs/toolkit';
import slice from '../Features/Slice';

const store = configureStore({
    reducer: {
        slice: slice,
    },
});

export default store;
