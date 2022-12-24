import { createSlice } from "@reduxjs/toolkit";

const users = localStorage.getItem("user");
const initialState = {
  User: users ? JSON.parse(users) : null,
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.User = action.payload;
      state.isError = false;
      localStorage.setItem("user", JSON.stringify(state.User));
    },
    loginFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    logOut: (state) => {
      state.User = null;
      state.isLoading = false;
      state.isError = false;
      localStorage.removeItem("user");
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logOut } =
  authSlice.actions;

export default authSlice.reducer;
