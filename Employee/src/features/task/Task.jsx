import { useParams } from "react-router-dom";
import { useGetTasksQuery } from "./taskSlice";
import { Link } from "react-router-dom";
import EditTaskStatus from "./EditTaskStatus";
import SubmitTaskReview from "./SubmitTaskReview";
import TaskDescription from "./TaskDescription";
import TaskDate from "./TaskDate";

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
    // console.log(task);
  } else if (isSuccess) {
    content = (
      <div className="taskPage-container">
        <div className="taskPage-title">
          <h1>{task.title}</h1>
          <p>Task Description</p>
          <TaskDescription description={task.description} />
        </div>

        <div className="taskPage-details">
          <div className="taskPage-details_items">
            <h3>
              Due <TaskDate date={task.dateToDeliver} />
            </h3>

            <SubmitTaskReview id={task.id} />

            <EditTaskStatus id={task.id} />
          </div>

          {/* <Link
          to={`/dash/task/edit/${task.id}`}
          style={{ textDecoration: "none" }}
        >
          <p>Edit Task</p>
        </Link> */}
        </div>
      </div>
    );
  }

  return <div className="task">{content}</div>;
};

export default Task;
