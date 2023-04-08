import { useGetTasksByUserIdQuery } from "./taskSlice";

const TaskDone = () => {
  const {
    data: task,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetTasksByUserIdQuery();
  let taskDone;
  if (isLoading) taskDone = <p>Loading...</p>;
  if (isSuccess) {
    const allTask = Object.values(task.entities).filter(
      (task) => task.completion === "Completed"
    );
    taskDone = <p className="taskrow-left_count">{allTask.length}</p>;
  }
  if (isError) taskDone = <p>{error}</p>;
  return taskDone;
};

export default TaskDone;
