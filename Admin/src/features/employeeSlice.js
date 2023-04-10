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
    getSearchEmployees: builder.query({
      query: (key) => `search/${key}`,
      providesTags: ["Employee"],
    }),
    countEmployee: builder.query({
      query: () => `count`,
      providesTags: ["Employee"],
    }),

    // Get Single Employee
    getSingleEmployee: builder.query({
      query: (id) => `${id}`,
      providesTags: ["Employee"],
    }),
    // Get Single Employee
    getTaskEmployee: builder.query({
      query: (id) => `/employeeTask/${id}`,
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
    updateEmployee: builder.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Employee"],
    }),
    deleteEmployee: builder.mutation({
      query(id) {
        return {
          url: `${id}`,
          method: "DELETE",
        };
      },

      invalidatesTags: ["Employee"],
    }),
  }),
});

export const {
  useGetAllEmployeesQuery,
  useCountEmployeeQuery,
  useGetTaskEmployeeQuery,
  useGetSingleEmployeeQuery,
  useAddEmployeeMutation,
  useGetSearchEmployeesQuery,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeeApi;
