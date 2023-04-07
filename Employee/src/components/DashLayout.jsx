import { Outlet } from "react-router-dom";
import DashSideBar from "./DashSideBar";
import NavBar from "./NavBar";

const DashLayout = () => {
  return (
    <main className="dash">
      <DashSideBar />
      <NavBar />
      <div className="dash-container">
        <Outlet />
      </div>
    </main>
  );
};

export default DashLayout;
