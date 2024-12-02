import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk("slice/fetchData", async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

export const slice = createSlice({
  name: 'slice',
  initialState: { productData: [], categories: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.productData = action.payload;

      action.payload.forEach((el) => {
        const categoryName = el.category;
        if (!state.categories.find((cat) => cat.category === categoryName)) {
          state.categories.push({
            category: categoryName,
            path: categoryName ? categoryName.split(" ")[0] : 'unknown',
          });
        }
      });
    });
  },
});

export default slice.reducer;
