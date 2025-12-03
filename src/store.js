import { configureStore } from "@reduxjs/toolkit";
import expensesSlice from "./features/expenses/expenseSlice";

const store = configureStore({
  reducer: {
    expenses: expensesSlice,
  },
});

export default store;
