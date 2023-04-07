import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taskAPi = createApi({
  reducerPath: "taskAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/task" }),
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    // Get Task
    getAllTask: builder.query({
      query: (query) => `/all?completion=${query}`,
      providesTags: ["Task"],
    }),
    // Get Single Task
    getSingleTask: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["Task"],
    }),
    //Single Employee Task
    getEmployTask: builder.query({
      query: (id) => `/employeeTask/${id}`,
      providesTags: ["Task"],
    }),
    // Create Task
    addTask: builder.mutation({
      query(body) {
        return {
          url: "/create",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useGetAllTaskQuery,
  useGetSingleTaskQuery,
  useGetEmployTaskQuery,
  useAddTaskMutation,
} = taskAPi;
