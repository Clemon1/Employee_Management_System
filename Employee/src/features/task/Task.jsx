import { useParams } from "react-router-dom";
import { useGetTasksQuery } from "./taskSlice";
import { Link } from "react-router-dom";

const Task = () => {
  const { taskId } = useParams();
  const { task, isSuccess, isLoading } = useGetTasksQuery("getTasks", {
    selectFromResult: ({ data, isSuccess, isLoading }) => ({
      task: data?.entities[taskId],
      isSuccess,
      isLoading,
    }),
  });
  let content;
  if (isLoading) {
    content = <h3>Loading...</h3>;
    console.log(task);
  } else if (isSuccess) {
    content = (
      <div>
        <h1>{task.title}</h1>
        <p>Task Description</p>
        <p>{task.description}</p>
        <p>due in {task.dateToDeliver} </p>
        <p>status</p>
        <p>{task.completion} </p>
        <Link
          to={`/dash/task/edit/${task.id}`}
          style={{ textDecoration: "none" }}
        >
          <p>Edit Task</p>
        </Link>
      </div>
    );
  }
  const checkId = (id) => {
    console.log(id);
  };
  checkId(taskId);
  return content;
};

export default Task;
