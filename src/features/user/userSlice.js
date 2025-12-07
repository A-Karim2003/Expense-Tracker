import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  error: null,
  user: {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    currency: "GBP",
    monthlyBudget: 5500,
  },
};

const ENDPOINT = "http://localhost:9000/user";

const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(ENDPOINT, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Could not fetch user data");

      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const updateDefaultCurrency = createAsyncThunk(
  "user/updateDefaultCurrency",
  async (currencyCode, { rejectWithValue }) => {
    try {
      const res = await fetch(ENDPOINT, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item: {
            currency: currencyCode,
          },
        }),
      });

      if (!res.ok) throw new Error("Could not update base currency");

      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.message);
      rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
    builder
      .addCase(updateDefaultCurrency.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateDefaultCurrency.fulfilled, (state, action) => {
        state.status = "success";
        state.user.currency = action.payload;
      })
      .addCase(updateDefaultCurrency.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});

export { fetchUser, updateDefaultCurrency };

export default userSlice.reducer;
