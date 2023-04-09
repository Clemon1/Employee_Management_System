import { Link } from "react-router-dom";
// import { useEffect } from "react";
import { useGetTasksQuery } from "./taskSlice";
import { parseISO, formatDistanceToNow } from "date-fns";

const TaskExcerpt = ({ taskId }) => {
  const { task, isSuccess, isLoading } = useGetTasksQuery("getTasks", {
    selectFromResult: ({ data, isSuccess, isLoading }) => ({
      task: data?.entities[taskId],
      isSuccess,
      isLoading,
    }),
  });


  let content;
  if (isLoading) content = <h2>Loading...</h2>;
  if (isSuccess) {
    // const date = parseISO(task.dateToDeliver);
    // const timePeriod = formatDistanceToNow(date);
    content = (
      <div>
        <h2>{task.title}</h2>
        <p>{task.description.substring(0, 50)}...</p>
        <p>deadline {task.dateToDeliver.split("T")[0]} </p>
        <p>{task.completion} </p>
        <Link to={`/dash/task/${task.id}`}>Open Task</Link>
      </div>
    );
  }
  return content;
};

export default TaskExcerpt;
