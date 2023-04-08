import "./navbar.css";
import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import {
  DashboardRounded,
  TaskRounded,
  AccountBoxRounded,
  AirportShuttleRounded,
} from "@mui/icons-material";

import React, { useState } from "react";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const toggleMenu = () => {
    setActive(!active);
  };
  const menuItems = (
    <div className="navBar-menu">
      <div className="navBar-menu_items">
        <DashboardRounded
          sx={{ marginRight: "10px", color: "#0e5b92", fontSize: "18px" }}
        />
        <Link
          to={"/dash"}
          style={{ textDecoration: "none", color: "black" }}
          onClick={toggleMenu}
        >
          Dashboard
        </Link>
      </div>
      <div className="navBar-menu_items">
        <TaskRounded
          sx={{ marginRight: "10px", color: "#0e5b92", fontSize: "18px" }}
        />
        <Link
          to={"/dash/task"}
          style={{ textDecoration: "none", color: "black" }}
          onClick={toggleMenu}
        >
          Task
        </Link>
      </div>
      <div className="navBar-menu_items">
        <AccountBoxRounded
          sx={{ marginRight: "10px", color: "#0e5b92", fontSize: "18px" }}
        />
        <Link
          to={"/dash/profile"}
          style={{ textDecoration: "none", color: "black" }}
          onClick={toggleMenu}
        >
          Profile
        </Link>
      </div>
      <div className="navBar-menu_items">
        <AirportShuttleRounded
          sx={{ marginRight: "10px", color: "#0e5b92", fontSize: "18px" }}
        />
        <Link
          to={"/dash/leave"}
          style={{ textDecoration: "none", color: "black" }}
          onClick={toggleMenu}
        >
          Leave
        </Link>
      </div>
    </div>
  );
  const bar = (
    <div className="navBar">
      <div className="navBar-logo">
        <h3>SCYLLA</h3>
      </div>
      <div className="navBar-hamburger">
        <IconButton onClick={toggleMenu}>
          <Menu />
        </IconButton>
      </div>
      <div className="navBar-menuItems">{active && menuItems}</div>
    </div>
  );
  return bar;
};

export default NavBar;
