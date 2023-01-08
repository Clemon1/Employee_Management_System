import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const employeeApi = createApi({
  reducerPath: "Employee",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/employee/" }),
  tagTypes: ["Employee"],
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: (page = 1) => `all?page=${page}`,
      providesTags: ["Employee"],
    }),
    countEmployee: builder.query({
      query: () => `count`,
      providesTags: ["Employee"],
    }),
    // Slice For creating Employee
    addEmployee: builder.mutation({
      query(body) {
        return {
          url: "create",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Employee"],
    }),
    // Get Single Employee
    getSingleEmployee: builder.query({
      query: (id) => `${id}`,
    }),
  }),
});

export const {
  useGetAllEmployeesQuery,
  useCountEmployeeQuery,
  useGetSingleEmployeeQuery,
  useAddEmployeeMutation,
} = employeeApi;
