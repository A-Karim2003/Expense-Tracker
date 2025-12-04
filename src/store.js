import { configureStore } from "@reduxjs/toolkit";
import expensesSlice from "./features/expenses/expenseSlice";
import currenciesSlice from "./features/currencies/currenciesSlice";

const store = configureStore({
  reducer: {
    expenses: expensesSlice,
    currencies: currenciesSlice,
  },
});

export default store;
