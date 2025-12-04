import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
  status: "idle", // loading | success | failed
  error: null,
};

//? Fetch Expenses when application loads first time
const fetchExpenses = createAsyncThunk("expenses/fetchExpenses", async () => {
  const res = await fetch(`http://localhost:9000/expenses`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
});

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense(state, action) {},
    updateExpense(state, action) {},
    deleteExpense(state, action) {},
  },

  //* Handles actions created outside of slice (e.g. async functions)
  extraReducers: (builder) => {
    builder.addCase(fetchExpenses.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchExpenses.fulfilled, (state, action) => {
      state.expenses = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchExpenses.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const { addExpense, updateExpense, deleteExpense } =
  expenseSlice.actions;
export { fetchExpenses };
export default expenseSlice.reducer;
