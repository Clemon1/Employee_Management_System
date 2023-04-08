import Profile from "./components/Profile";
import Welcome from "./components/Welcome";
import TaskLeft from "./features/task/TaskLeft";
import TaskDone from "./features/task/TaskDone";
import TaskStarted from "./features/task/TaskStarted";
import TaskData from "./features/task/TaskData";
import TaskRow from "./features/task/TaskRow";
import TaskStatus from "./features/task/TaskStatus";
import TaskDate from "./features/task/TaskDate";
import TaskPriority from "./features/task/TaskPriority";
import TaskTable from "./features/task/TaskTable";
import SubmitTaskReview from "./features/task/SubmitTaskReview";
import EditTaskStatus from "./features/task/EditTaskStatus";
import TaskDescription from "./features/task/TaskDescription";
import { useGetTasksByUserIdQuery } from "./features/task/taskSlice";
import TaskReview from "./features/task/TaskReview";
import NavBar from "./components/NavBar";
import LeaveForm from "./features/leave/LeaveForm";
import LeavePage from "./features/leave/LeavePage";
import React from "react";

const Test = () => {
  // const id = "64202878147a184e5d0be81c";
  // const date = "2023-03-31T00:00:00.000Z";
  // const user = JSON.parse(localStorage.getItem("user"));
  // const { data: task, isLoading, isSuccess } = useGetTasksByUserIdQuery();
  // let allTask;
  // if (isLoading) {
  //   return <p>Loading content</p>;
  // }
  // if (isSuccess) {
  //   allTask = Object.values(task.entities).filter(
  //     (task) => task.review === true
  //   );
  // }

  // console.log(allTask);
  return (
    <div>
      <LeaveForm />
      {/* <LeavePage /> */}
    </div>
  );
};

export default Test;
