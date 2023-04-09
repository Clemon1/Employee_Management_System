import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

export const taskAdapter = createEntityAdapter({});

const initialState = taskAdapter.getInitialState();

export const taskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/task/all",
      transformResponse: (responseData) => {
        const loadedTask = responseData.tasks.map((task) => {
          task.id = task._id;
          return task;
        });
        return taskAdapter.setAll(initialState, loadedTask);
      },
      providesTags: (result, error, arg) => [
        ...result.ids.map((id) => ({ type: "Task", id })),
      ],
    }),
    getTasksByUserId: builder.query({
      query: () => {
        const user = JSON.parse(localStorage.getItem("users"));
        return `/task/all/${user._id}`;
      },
      transformResponse: (responseData) => {
        // console.log(responseData);
        const loadedTask = responseData.map((task) => {
          task.id = task._id;
          return task;
        });
        return taskAdapter.setAll(initialState, loadedTask);
      },
      providesTags: (result, error, arg) => [
        ...result.ids.map((id) => ({ type: "Task", id })),
      ],
    }),
    updateTask: builder.mutation({
      query: (initialNote) => ({
        url: `/task/${initialNote.id}`,
        method: "PUT",
        body: {
          ...initialNote,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Task", id: arg.id }],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTasksByUserIdQuery,
  useUpdateTaskMutation,
} = taskApiSlice;

//returns the query rsult object
export const selectTasksResult = taskApiSlice.endpoints.getTasks.select();

//create memoized selector
const selectTaskData = createSelector(
  selectTasksResult,
  (taskResult) => taskResult.data //normalized state with ids and entities
);
export const {
  selectAll: selectAllTask,
  selectById: selectTaskById,
  selectIds: selectTaskIds,
  //pass in a selector that returns the posts slice of state
} = taskAdapter.getSelectors((state) => selectTaskData(state) ?? initialState);

/*
 if (result?.ids) {
          return [
            { type: "Task", id: "List" },
            ...result.ids.map((id) => ({ type: "Task", id })),
          ];
        } else return [{ type: "Task", id: "List" }];
*/
