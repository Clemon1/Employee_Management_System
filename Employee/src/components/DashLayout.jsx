import { Outlet } from "react-router-dom";
import DashSideBar from "./DashSideBar";

const DashLayout = () => {
  return (
    <main className="dash">
      <DashSideBar />
      <div className="dash-container">
        <Outlet />
      </div>
    </main>
  );
};

export default DashLayout;
