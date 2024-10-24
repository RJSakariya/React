import { createSlice } from '@reduxjs/toolkit';

export const expense = createSlice({
  name: 'expense',
  initialState: {
    expenseList: [],
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenseList = [...state.expenseList, action.payload];
    },
  },
});

export const { addExpense } = expense.actions;
export default expense.reducer;
