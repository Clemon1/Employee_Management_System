import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import DashLayout from "./components/DashLayout";
import Dashboard from "./components/Dashboard";
import Task from "./features/task/Task";
// import EditTask from "./features/task/EditTask";
import EditTaskForm from "./features/task/EditTaskForm";
import TaskList from "./features/task/TaskList";
import UserPage from "./features/user/UserPage";
import Test from "./Test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="test" element={<Test />} />
        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="task">
            <Route index element={<TaskList />} />
            <Route path=":taskId" element={<Task />} />
            <Route path="edit/:taskId" element={<EditTaskForm />} />
          </Route>
          <Route path="profile">
            <Route index element={<UserPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
