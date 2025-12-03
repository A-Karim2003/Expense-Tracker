import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
  status: "idle", // loading | success | failed
  error: null,
};

//? Fetch Expenses when application loads

const fetchExpenses = createAsyncThunk("expenses/fetchExpenses", async () => {
  const res = await fetch(`http://localhost:9000/expenses`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
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
    builder.addCase(fetchExpenses.pending, (state, action) => {});
    builder.addCase(fetchExpenses.fulfilled, (state, action) => {
      console.log("State:", state);
      console.log("Action:", action);
    });
    builder.addCase(fetchExpenses.rejected, (state, action) => {});
  },
});

export const { addExpense, updateExpense, deleteExpense } =
  expenseSlice.actions;
export { fetchExpenses };

export default expenseSlice.reducer;
