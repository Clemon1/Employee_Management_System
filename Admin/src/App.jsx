import "./App.css";
import {
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Payroll from "./pages/Payroll";
import Employees from "./pages/Employees";
import Task from "./pages/Task,";
import Jobs from "./pages/Job";
import Department from "./pages/Department";
import Leave from "./pages/Leave";
import Settings from "./pages/Settings";
import { useSelector } from "react-redux";

function App() {
  const User = useSelector((state) => state.auth.User);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={User ? <Dashboard /> : <Home />} />
        <Route path='/login' element={User ? <Dashboard /> : <Login />} />
        <Route path='/dashboard' element={User ? <Dashboard /> : <Login />} />
        <Route path='/payroll' element={User ? <Payroll /> : <Login />} />
        <Route path='/employees' element={User ? <Employees /> : <Login />} />
        <Route path='/tasks' element={User ? <Task /> : <Login />} />
        <Route path='/jobs' element={User ? <Jobs /> : <Login />} />
        <Route path='/department' element={User ? <Department /> : <Login />} />
        <Route path='/leave-request' element={User ? <Leave /> : <Login />} />
        <Route path='/settings' element={User ? <Settings /> : <Login />} />
      </Route>,
    ),
  );
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
