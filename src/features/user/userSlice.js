import { createSlice } from "@reduxjs/toolkit";

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

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers(builder) {},
});
