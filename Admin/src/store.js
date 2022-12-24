import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { employeeApi } from "./features/employeeSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    [employeeApi.reducerPath]: employeeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeApi.middleware),
});

setupListeners(store.dispatch);
