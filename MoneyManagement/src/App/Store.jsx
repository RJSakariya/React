import { configureStore } from "@reduxjs/toolkit";
import { budget } from "./badgetSlice";
import { expense } from "./expenseSlice";

export const store = configureStore({
    reducer:{
        budgetKey : budget.reducer,
        expenseKey : expense.reducer
    }
})