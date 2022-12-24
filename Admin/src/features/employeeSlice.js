import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const employeeApi = createApi({
  reducerPath: "Employee",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/employee/" }),
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: (page = 1) => `all?page=${page}`,
    }),
    countEmployee: builder.query({
      query: () => `count`,
    }),
  }),
});

export const { useGetAllEmployeesQuery, useCountEmployeeQuery } = employeeApi;
