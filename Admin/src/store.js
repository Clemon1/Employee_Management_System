import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { employeeApi } from "./features/employeeSlice";
import { departmentAPI } from "./features/departmentSlice";
import { taskAPi } from "./features/TaskSlide";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    [employeeApi.reducerPath]: employeeApi.reducer,
    [departmentAPI.reducerPath]: departmentAPI.reducer,
    [taskAPi.reducerPath]: taskAPi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      employeeApi.middleware,
      departmentAPI.middleware,
      taskAPi.middleware,
    ),
});

setupListeners(store.dispatch);
