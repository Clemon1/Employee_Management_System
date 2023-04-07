import React from "react";
import { useGetTasksByUserIdQuery } from "./taskSlice";

const TaskStarted = () => {
  const {
    data: task,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetTasksByUserIdQuery();
  let taskStarted;
  if (isLoading) taskStarted = <p>Loading...</p>;
  if (isSuccess) {
    const allTask = Object.values(task.entities).filter(
      (task) => task.completion === "Started"
    );
    taskStarted = <p className="taskrow-left_count">{allTask.length}</p>;
  }
  if (isError) taskStarted = <p>{error}</p>;
  return taskStarted;
};

export default TaskStarted;
