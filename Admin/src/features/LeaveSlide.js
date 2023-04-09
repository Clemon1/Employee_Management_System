import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const leaveAPI = createApi({
  reducerPath: "leaveAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/leave" }),
  tagTypes: ["Leaves"],
  endpoints: (builder) => ({
    getAllLeave: builder.query({
      query: () => `/`,
      providesTags: ["Leaves"],
    }),
    getSingleLeave: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["Leaves"],
    }),
    createLeave: builder.mutation({
      query(body) {
        return {
          url: "/create",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Leaves"],
    }),
    updateLeave: builder.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `/${id}`,
          method: "PUT",
          body,
        };
      },

      invalidatesTags: ["Leaves"],
    }),
  }),
});

export const {
  useGetAllLeaveQuery,
  useGetSingleLeaveQuery,
  useCreateLeaveMutation,
  useUpdateLeaveMutation,
} = leaveAPI;
