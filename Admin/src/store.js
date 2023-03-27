import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { employeeApi } from "./features/employeeSlice";
import { departmentAPI } from "./features/departmentSlice";
import { taskAPi } from "./features/TaskSlide";
import { leaveAPI } from "./features/LeaveSlide";
import { attendanceApi } from "./features/attendanceSlice";
import { payrollAPi } from "./features/payrollSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    [employeeApi.reducerPath]: employeeApi.reducer,
    [departmentAPI.reducerPath]: departmentAPI.reducer,
    [taskAPi.reducerPath]: taskAPi.reducer,
    [leaveAPI.reducerPath]: leaveAPI.reducer,
    [attendanceApi.reducerPath]: attendanceApi.reducer,
    [payrollAPi.reducerPath]: payrollAPi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      employeeApi.middleware,
      departmentAPI.middleware,
      taskAPi.middleware,
      leaveAPI.middleware,
      attendanceApi.middleware,
      payrollAPi.middleware,
    ),
});

setupListeners(store.dispatch);
