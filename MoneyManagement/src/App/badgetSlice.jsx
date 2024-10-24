import { createSlice } from '@reduxjs/toolkit';
import { addExpense } from './expenseSlice';

export const budget = createSlice({
  name: 'budget',
  initialState: {
    budget: 0,
  },
  reducers: {
    addBudget: (state, action) => {
      state.budget += parseInt(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addExpense, (state, action) => {
      state.budget -= parseInt(action.payload.expense);
    });
  },
});

export const { addBudget } = budget.actions;
export default budget.reducer;
