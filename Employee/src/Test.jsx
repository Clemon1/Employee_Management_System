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
  // console.log(allTask);
  return (
    <div>
      <LeaveForm />
      {/* <LeavePage /> */}
    </div>
  );
};

export default Test;
