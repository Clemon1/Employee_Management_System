import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const departmentAPI = createApi({
  reducerPath: "Department",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/department" }),
  tagTypes: ["department"],
  endpoints: (builder) => ({
    getAllDepartment: builder.query({
      query: (page = 1) => `/?page=${page}`,
      providesTags: ["department"],
    }),
    //Get single Employee
    getSingleDepartment: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["department"],
    }),
    //Create Department
    createDepartment: builder.mutation({
      query(body) {
        return {
          url: "/create",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["department"],
    }),
  }),
});

export const {
  useGetAllDepartmentQuery,
  useGetSingleDepartmentQuery,
  useCreateDepartmentMutation,
} = departmentAPI;
