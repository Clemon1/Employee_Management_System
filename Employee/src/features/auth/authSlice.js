import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, foundUser } = action.payload;

      // console.log(foundUser);
      localStorage.setItem("token", accessToken);
      localStorage.setItem("users", JSON.stringify(foundUser));
      state.token = accessToken;
      state.user = foundUser;
    },

    logOut: (state, action) => {
      state.token = null;

      localStorage.removeItem("users");
      localStorage.removeItem("token");
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentUser = (state) => state.auth.user;
