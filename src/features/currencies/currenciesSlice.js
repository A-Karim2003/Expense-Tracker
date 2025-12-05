import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  currencies: [],
  status: "idle",
  error: null,
};

const fetchCurrencyTypes = createAsyncThunk(
  "currencies/fetchCurrencyTypes",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:9000/currencies`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Could not fetch currencies");

      const currencyTypes = await res.json();
      return currencyTypes;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchCurrencyTypes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCurrencyTypes.fulfilled, (state, action) => {
        state.status = "success";
        state.currencies = action.payload;
      })
      .addCase(fetchCurrencyTypes.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});

export { fetchCurrencyTypes };
export default currenciesSlice.reducer;
