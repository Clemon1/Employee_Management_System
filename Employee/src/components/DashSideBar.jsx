import React from "react";
import { Link } from "react-router-dom";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import TaskRoundedIcon from "@mui/icons-material/TaskRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import "./dash.css";

const DashSideBar = () => {
  return (
    <div className="dash-nav">
      <div className="dash-nav__items">
        <h1>Scylla</h1>
        <div className="dash-nav__items-group">
          <DashboardRoundedIcon />
          <p>
            <Link
              to={"/dash"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Dashboard
            </Link>
          </p>
        </div>
        <div className="dash-nav__items-group">
          <TaskRoundedIcon />
          <p>
            <Link
              to={"/dash/task"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Task
            </Link>
          </p>
        </div>
        <div className="dash-nav__items-group">
          <AccountBoxRoundedIcon />
          <p>
            <Link
              to={"/dash/profile"}
              style={{ textDecoration: "none", color: "black" }}
            >
              Profile
            </Link>
          </p>
        </div>
      </div>
      <div className="dash-nav__items-group">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          Log out
        </Link>
        <LogoutRoundedIcon />
      </div>
    </div>
  );
};

export default DashSideBar;
