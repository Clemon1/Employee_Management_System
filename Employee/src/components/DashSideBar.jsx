import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import TaskRoundedIcon from "@mui/icons-material/TaskRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import "./dash.css";
import LogOut from "./LogOut";

const DashSideBar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const id = pathname.substring(pathname.lastIndexOf("/") + 1);
  return (
    <div className="dash-nav">
      <div className="dash-nav__items">
        <h1>Scylla</h1>
        <Link
          to={"/dash"}
          style={{ textDecoration: "none", color: "black" }}
          className={
            location.pathname === "/dash"
              ? "activeStyle"
              : "dash-nav__items-link"
          }
        >
          <DashboardRoundedIcon
            sx={{ marginRight: "10px", color: "#0e5b92", fontSize: "18px" }}
          />
          Dashboard
        </Link>
        <Link
          to={"/dash/task"}
          style={{ textDecoration: "none", color: "black" }}
          className={
            location.pathname === "/dash/task" ||
            location.pathname === `/dash/task/${id}`
              ? "activeStyle"
              : "dash-nav__items-link"
          }
        >
          <TaskRoundedIcon
            sx={{ marginRight: "10px", color: "#0e5b92", fontSize: "18px" }}
          />
          Task
        </Link>
        <Link
          to={"/dash/profile"}
          style={{ textDecoration: "none", color: "black" }}
          className={
            location.pathname === "/dash/profile"
              ? "activeStyle"
              : "dash-nav__items-link"
          }
        >
          <AccountBoxRoundedIcon
            sx={{ marginRight: "10px", color: "#0e5b92", fontSize: "18px" }}
          />
          Profile
        </Link>
      </div>
      <div className="dash-nav__items-group">
        <LogOut />
        {/* <Link to={"/"} style={{ textDecoration: "none" }}>
          Log out
        </Link>
        <LogoutRoundedIcon
          sx={{ marginRight: "10px", color: "#0e5b92", fontSize: "18px" }}
        /> */}
      </div>
    </div>
  );
};

export default DashSideBar;
