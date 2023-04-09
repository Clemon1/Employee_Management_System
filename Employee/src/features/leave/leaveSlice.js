import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

export const leaveAdapter = createEntityAdapter({});

const initialState = leaveAdapter.getInitialState();

export const leaveApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLeave: builder.query({
      query: () => "/leave",
      transformResponse: (responseData) => {
        const loadedLeave = responseData.leave.map((leave) => {
          leave.id = leave._id;
          return leave;
        });
        return leaveAdapter.setAll(initialState, loadedLeave);
      },
      providesTags: (result, error, arg) => [
        ...result.ids.map((id) => ({ type: "Leave", id })),
      ],
    }),
    getLeaveByUserId: builder.query({
      query: () => {
        const user = JSON.parse(localStorage.getItem("users"));
        return `/leave/employee/${user._id}`;
      },
      transformResponse: (responseData) => {
        // console.log(responseData);
        const loadedLeave = responseData.map((leave) => {
          leave.id = leave._id;
          return leave;
        });
        return leaveAdapter.setAll(initialState, loadedLeave);
      },
      providesTags: (result, error, arg) => [
        ...result.ids.map((id) => ({ type: "Leave", id })),
      ],
    }),
    createLeave: builder.mutation({
      query: (leave) => ({
        url: "/leave/create",
        method: "POST",
        body: {
          ...leave,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Leave", id: arg.id }],
    }),
    updateLeave: builder.mutation({
      query: (initialLeave) => ({
        url: `/leave/${initialLeave.id}`,
        method: "PUT",
        body: {
          ...initialLeave,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Leave", id: arg.id }],
    }),
  }),
});

export const {
  useGetLeaveQuery,
  useGetLeaveByUserIdQuery,
  useUpdateLeaveMutation,
  useCreateLeaveMutation,
} = leaveApiSlice;

//returns the query rsult object
export const selectLeaveResult = leaveApiSlice.endpoints.getLeave.select();

//create memoized selector
const selectLeaveData = createSelector(
  selectLeaveResult,
  (leaveResult) => leaveResult.data //normalized state with ids and entities
);
export const {
  selectAll: selectAllLeave,
  selectById: selectLeaveById,
  selectIds: selectLeaveIds,
  //pass in a selector that returns the posts slice of state
} = leaveAdapter.getSelectors(
  (state) => selectLeaveData(state) ?? initialState
);

/*
 if (result?.ids) {
          return [
            { type: "Task", id: "List" },
            ...result.ids.map((id) => ({ type: "Task", id })),
          ];
        } else return [{ type: "Task", id: "List" }];
*/
