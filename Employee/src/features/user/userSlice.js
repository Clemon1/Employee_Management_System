import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";
import { createSelector } from "@reduxjs/toolkit";

const userAdapter = createEntityAdapter();
const initialState = userAdapter.getInitialState();
const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/employee/all`,
      transformResponse: (responseData) => {
        const loadedUser = responseData.allEmployees.map((user) => {
          user.id = user._id;
          return user;
        });
        return userAdapter.setAll(initialState, loadedUser);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Task", id: "List" },
            ...result.ids.map((id) => ({ type: "Task", id })),
          ];
        } else return [{ type: "Task", id: "List" }];
      },
    }),
    getUserById: builder.query({
      query: () => {
        const user = JSON.parse(localStorage.getItem("users"));
        return `/employee/${user._id}`;
      },
      transformResponse: (responseData) => {
        const loadedUser = (responseData.id = responseData._id);
        return userAdapter.setAll(initialState, loadedUser);
      },
      providesTags: (result, error, arg) => [
        ...result.ids.map((id) => ({ type: "Task", id })),
      ],
    }),
  }),
});
export const { useGetUsersQuery, useGetUserByIdQuery } = userApiSlice;

//returns the query rsult object
export const selectUsersResult = userApiSlice.endpoints.getUsers.select();

//create memoized selector
const selectUserData = createSelector(
  selectUsersResult,
  (userResult) => userResult.data //normalized state with ids and entities
);
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
  //pass in a selector that returns the posts slice of state
} = userAdapter.getSelectors((state) => selectUserData(state) ?? initialState);
