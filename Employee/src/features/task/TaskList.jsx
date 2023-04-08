import { useGetTasksByUserIdQuery } from "./taskSlice";
import TaskTable from "./TaskTable";

const TaskList = () => {
  const deviceWidth = window.innerWidth;
  const {
    data: task,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetTasksByUserIdQuery();

  let content;
  if (isLoading) {
    content = <p>"Loading..."</p>;
  } else if (isSuccess) {
    const allTask = Object.values(task.entities);
    let table;
    if (deviceWidth < 600) {
      content = <TaskTable task={allTask} perPage={9} />;
    } else if (deviceWidth > 1370) {
      content = <TaskTable task={allTask} perPage={13} />;
    } else {
      content = <TaskTable task={allTask} perPage={10} />;
    }
    // content = <TaskTable task={allTask} perPage={10} />;
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <div className="task">
      <div className="task-list">{content}</div>
    </div>
  );
};

export default TaskList;
