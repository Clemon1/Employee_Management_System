import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout";
import Public from "./components/Public";
import DashLayout from "./components/DashLayout";
import Dashboard from "./components/Dashboard";
import Task from "./features/task/Task";
// import EditTask from "./features/task/EditTask";
import EditTaskForm from "./features/task/EditTaskForm";
import TaskList from "./features/task/TaskList";
import UserPage from "./features/user/UserPage";
import LeavePage from "./features/leave/LeavePage";
import LeaveForm from "./features/leave/LeaveForm";
import Leave from "./features/leave/Leave";
import { Navigate } from "react-router-dom";

import { selectCurrentUser } from "./features/auth/authSlice";
import { useSelector } from "react-redux";

function App() {
  const User = useSelector(selectCurrentUser);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={User ? <Dashboard /> : <Public />} />

        <Route
          path='dash'
          element={User ? <DashLayout /> : <Navigate to={"/"} />}>
          <Route index element={<Dashboard />} />
          <Route path='task'>
            <Route index element={<TaskList />} />
            <Route path=':taskId' element={<Task />} />
            <Route path='edit/:taskId' element={<EditTaskForm />} />
          </Route>
          <Route path='profile'>
            <Route index element={<UserPage />} />
          </Route>
          <Route path='leave'>
            <Route index element={<LeavePage />} />
            <Route path='apply' element={<LeaveForm />} />
            <Route path=':id' element={<Leave />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
