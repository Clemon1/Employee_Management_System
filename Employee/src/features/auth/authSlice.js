import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const time = localStorage.getItem("loginTime");
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
    loginTime: time ? JSON.parse(time) : null,
    logOutTime: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, foundUser } = action.payload;

      // console.log(foundUser);
      localStorage.setItem("token", accessToken);
      localStorage.setItem("users", JSON.stringify(foundUser));
      state.token = accessToken;
      state.user = foundUser;
      state.loginTime = Date.now();
      localStorage.setItem("loginTime", JSON.stringify(state.loginTime));
    },

    logOut: (state, action) => {
      state.logOutTime = Date.now();
      state.token = null;

      localStorage.removeItem("users");
      localStorage.removeItem("token");
      localStorage.removeItem("loginTime");
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentUser = (state) => state.auth.user;
