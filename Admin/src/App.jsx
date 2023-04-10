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
import Task from "./pages/Task";
import Jobs from "./pages/Attendance";
import Department from "./pages/Department";
import Leave from "./pages/Leave";
import Settings from "./pages/Settings";
import { useSelector } from "react-redux";
import CreateEmployee from "./pages/createEmployee";
import Create_Department from "./pages/createDepartment";
import SingleEmployee from "./pages/singleEmployee";
import SingleDepartment from "./pages/singleDepartment";
import CreateTask from "./pages/CreateTask";
import Attendance from "./pages/Attendance";
import Search from "./pages/Search";
import ErrorPage from "./pages/404";
import SingleLeave from "./pages/singleLeave";
import UpdateEmployee from "./pages/updateEmployee";

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
        <Route
          path='/employees/create'
          element={User ? <CreateEmployee /> : <Login />}
        />
        <Route
          path='/employees/:id'
          element={User ? <SingleEmployee /> : <Login />}
        />
        <Route
          path='/employees/update/:id'
          element={User ? <UpdateEmployee /> : <Login />}
        />
        <Route path='/tasks' element={User ? <Task /> : <Login />} />
        <Route
          path='/tasks/create'
          element={User ? <CreateTask /> : <Login />}
        />
        {/* <Route path='/attendance' element={User ? <Attendance /> : <Login />} /> */}
        <Route path='/department' element={User ? <Department /> : <Login />} />
        <Route
          path='/department/:id'
          element={User ? <SingleDepartment /> : <Login />}
        />
        <Route
          path='/department/create'
          element={User ? <Create_Department /> : <Login />}
        />

        <Route path='/leave-request' element={User ? <Leave /> : <Login />} />
        <Route
          path='/leave-request/:id'
          element={User ? <SingleLeave /> : <Login />}
        />
        <Route path='/search/:key' element={User ? <Search /> : <Login />} />

        <Route path='/settings' element={User ? <Settings /> : <Login />} />
        <Route path='*' element={<ErrorPage />} />
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
