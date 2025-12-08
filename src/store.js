import { configureStore } from "@reduxjs/toolkit";
import expensesSlice from "./features/expenses/expenseSlice";
import currenciesSlice from "./features/currencies/currenciesSlice";
import userSlice from "./features/user/userSlice";
import categoriesSlice from "./features/categories/categoriesSlice";

const store = configureStore({
  reducer: {
    expenses: expensesSlice,
    currencies: currenciesSlice,
    user: userSlice,
    categories: categoriesSlice,
  },
});

export default store;
