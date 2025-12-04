import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  currencies: [],
  status: "idle",
  error: null,
};

const fetchCurrencyRates = createAsyncThunk(
  "currencies/fetchCurrencyRates",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`https://api.frankfurter.dev/v1/latest`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Could not fetch currencies");

      const { rates } = await res.json();
      return rates;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchCurrencyRates.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCurrencyRates.fulfilled, (state, action) => {
      state.status = "success";
      state.currencies = action.payload;
      console.log("Payload:", action.payload);
    });
    builder.addCase(fetchCurrencyRates.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});

export { fetchCurrencyRates };
export default currenciesSlice.reducer;

/*
function convert(from, to, amount) {
  fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`)
    .then((resp) => resp.json())
    .then((data) => {
      const convertedAmount = (amount * data.rates[to]).toFixed(2);
    });
  }

convert("EUR", "USD", 10);
*/
