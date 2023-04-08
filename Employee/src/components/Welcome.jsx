import React from "react";
import { useGetUsersQuery } from "../features/user/userSlice";
import format from "date-fns/format";

const Welcome = ({ userId }) => {
  const date = new Date();
  const day = format(date, "PP");
  const { user, isLoading, isSuccess } = useGetUsersQuery("getUsers", {
    selectFromResult: ({ data, isLoading, isSuccess }) => ({
      user: data?.entities[userId],
      isSuccess,
      isLoading,
    }),
  });
  let content;
  if (isLoading) return <p>Loading</p>;
  if (isSuccess) {
    content = (
      <div className="welcome-comp">
        <h1>Welcome back, {user.fullname.split(" ")[0]}</h1>
        <p>{day}</p>
      </div>
    );
  }
  return content;
};

export default Welcome;
