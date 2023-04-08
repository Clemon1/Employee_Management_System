import { useGetTasksByUserIdQuery } from "./taskSlice";

const TaskLeft = () => {
  const {
    data: task,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetTasksByUserIdQuery();
  let taskLeft;
  if (isLoading) taskLeft = <p>Loading...</p>;
  if (isSuccess) {
    const allTask = Object.values(task.entities).filter(
      (task) => task.completion === "Pending"
    );
    taskLeft = <p className="taskrow-left_count">{allTask.length}</p>;
  }
  if (isError) taskLeft = <p>{error}</p>;
  return taskLeft;
};

export default TaskLeft;
