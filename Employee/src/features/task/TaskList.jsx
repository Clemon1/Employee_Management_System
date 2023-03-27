import { useGetTasksByUserIdQuery } from "./taskSlice";
import { useEffect } from "react";
import TaskExcerpt from "./TaskExcerpt";

const TaskList = () => {
  const {
    data: task,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetTasksByUserIdQuery();
  let pendingContent;
  let completeContent;

  //   pendingContent = Object.values(obj).filter(
  //     (obj) => obj.completion === "pending"
  //   );
  //   let pending;
  //   pending = pendingContent.map((task) => (
  //     <TaskExcerpt key={task.id} taskId={task.id} />
  //   ));
  let pending, complete;
  useEffect(() => {
    if (isSuccess) {
      console.log(task.entities);
      pendingContent = Object.values(task.entities).filter(
        (obj) => obj.completion === "Pending"
      );
      completeContent = Object.values(task.entities).filter(
        (obj) => obj.completion !== "Pending"
      );
      //   pending = pendingContent.map((task) => (
      //     <TaskExcerpt key={task.id} taskId={task.id} />
      //   ));
    }
  }, [isSuccess]);
  let content;
  if (isLoading) {
    content = <p>"Loading..."</p>;
  } else if (isSuccess) {
    content = task.ids.map((postId) => (
      <TaskExcerpt key={postId} taskId={postId} />
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  //   if (isLoading) {
  //     pending = <h2>Loading...</h2>;
  //     complete = <h2>Loading...</h2>;
  //   } else if (isSuccess) {
  //     if (completeContent) {
  //       complete = completeContent.map((task) => (
  //         <TaskExcerpt key={task.id} taskId={task.id} />
  //       ));
  //     }
  //   } else if (isError) {
  //     pending = <h2>{error}</h2>;
  //   }
  return (
    <div>
      <h2>this is task list page</h2>
      {content}
    </div>
  );
};

export default TaskList;
