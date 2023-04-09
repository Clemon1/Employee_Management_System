import React from "react";
import { useGetTasksByUserIdQuery } from "../features/task/taskSlice";
import Welcome from "./Welcome";
import Profile from "./Profile";
import TaskRow from "../features/task/TaskRow";
import TaskData from "../features/task/TaskData";
import TaskTable from "../features/task/TaskTable";
import TaskReview from "../features/task/TaskReview";
import "./dash.css";

const Dashboard = () => {
  const {
    data: task,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetTasksByUserIdQuery();
  const deviceWidth = window.innerWidth;
  // const deviceHeight = window.innerHeight;

  const user = JSON.parse(localStorage.getItem("users"));
  let content;
  if (isSuccess) {
    const allTask = Object.values(task.entities);
    let table;
    if (deviceWidth > 1370 && deviceWidth < 1650) {
      table = <TaskTable task={allTask} perPage={8} />;
    } else {
      table = <TaskTable task={allTask} perPage={6} />;
    }
    content = (
      <div className="dashboard">
        <div className="top-bar">
          <Welcome userId={user._id} />
          <Profile userId={user._id} />
        </div>
        <div className="dashboard-main">
          <div className="dashboard-main_left">
            <div className="dashboard-main_left-top">
              <TaskRow />
            </div>
            <div className="dashboard-main_left-bottom">{table}</div>
          </div>
          <div className="dashboard-main_right">
            <div className="dashboard-main_right-title">
              <h4>On Review</h4>
              <div className="dashboard-main_right-count">
                {allTask.filter((task) => task.review === true).length}
              </div>
            </div>
            <div className="dashboard-main_right-card">
              {allTask
                .filter((task) => task.review === true)
                .map((task) => (
                  <TaskReview key={task.id} review={task} />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default Dashboard;
