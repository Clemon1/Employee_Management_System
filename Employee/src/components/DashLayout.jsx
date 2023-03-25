import { Outlet } from "react-router-dom";
import DashSideBar from "./DashSideBar";

const DashLayout = () => {
  return (
    <>
      <DashSideBar />
      <div className="dash-container">
        <Outlet />
      </div>
    </>
  );
};

export default DashLayout;
