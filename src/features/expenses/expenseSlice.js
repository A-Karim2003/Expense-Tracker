import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
  status: "idle", // loading | success | failed
  error: null,
};

//? Fetch Expenses when application loads first time
const ENDPOINT = `http://localhost:9000/expenses`;
const fetchExpenses = createAsyncThunk(
  "expenses/fetchExpenses",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(ENDPOINT, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Could not fetch expenses");

      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const addExpense = createAsyncThunk(
  "expenses/addExpense",
  async (newExpense, { rejectWithValue }) => {
    if (!newExpense) return;
    console.log(newExpense);

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newExpense),
      });

      if (!res.ok) throw Error("Could not add Expense");

      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    updateExpense(state, action) {},
    deleteExpense(state, action) {},
  },

  //* Handles actions created outside of slice (e.g. async functions)
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.expenses = action.payload;
        state.status = "success";
      })
      .addCase(fetchExpenses.rejected, (state) => {
        state.status = "error";
      });

    builder
      .addCase(addExpense.pending, (state, action) => {
        console.log("Action payload:", action.payload);
        state.status = "loading";
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        console.log("Action payload:", action.payload);
        state.status = "success";
        state.expenses.push(action.payload);
      })
      .addCase(addExpense.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});

export const { updateExpense, deleteExpense } = expenseSlice.actions;
export { fetchExpenses, addExpense };
export default expenseSlice.reducer;
