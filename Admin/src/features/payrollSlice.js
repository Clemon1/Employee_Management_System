import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const payrollAPi = createApi({
  reducerPath: "payrollAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/payroll" }),
  tagTypes: ["Payroll"],
  endpoints: (builder) => ({
    // Get Task
    getPayroll: builder.query({
      query: (query) => `/`,
      providesTags: ["Payroll"],
    }),
    // Get Single Task
    getSinglePayroll: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["Payroll"],
    }),
    // Create Task
    createPayroll: builder.mutation({
      query(body) {
        return {
          url: "/create",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Payroll"],
    }),
  }),
});

export const {
  useGetPayrollQuery,
  useGetSinglePayrollQuery,
  useCreatePayrollMutation,
} = payrollAPi;
