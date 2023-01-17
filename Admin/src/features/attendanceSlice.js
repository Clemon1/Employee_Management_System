import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taskAPi = createApi({
  reducerPath: "taskAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/attendance" }),
});
