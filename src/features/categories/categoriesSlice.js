import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  status: "idle",
  error: null,
};

const fetchCategories = createAsyncThunk(
  "user/fetchCategories",
  async function fetchCategories(_, { rejectWithValue }) {
    try {
      const res = await fetch("http://localhost:9000/categories", {
        method: "GET",
        headers: { "Content-Type": "application:json" },
      });

      if (!res.ok) throw new Error("Could not fetch categories");

      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.status = "success";
      })

      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "error";
        status.error = action.payload;
      });
  },
});

export default categoriesSlice.reducer;
export { fetchCategories };
