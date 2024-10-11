

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USERS_URL);
  return response.data; // No need to spread since axios returns an array
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true; // Set loading to true when fetching
        state.error = null;   // Clear any previous error
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false after fetching
        state.users = action.payload; // Store the fetched users
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false; // Set loading to false if there's an error
        state.error = action.error.message; // Store the error message
      });
  },
});

// Selector to get all users
export const selectAllUsers = (state) => state.users.users;

// Export the reducer for the store
export default usersSlice.reducer;
