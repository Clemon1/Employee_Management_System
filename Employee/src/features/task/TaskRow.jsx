import TaskLeft from "./TaskLeft";
import TaskDone from "./TaskDone";
import TaskStarted from "./TaskStarted";
import { useState } from "react";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import RotateRightRoundedIcon from "@mui/icons-material/RotateRightRounded";
import taskArt from "./task.png";

import React from "react";

const TaskRow = () => {
  const [request, setRequest] = useState("");
  const onRequestClick = () => {
    setRequest("request-task_button");
  };
  const content = (
    <div className="taskrow">
      <div className="taskrow-left">
        <p className="taskrow-left_title">Task Left</p>
        <img src={taskArt} alt="" className="taskrow-left_img" />
        <div>
          <TaskLeft />
        </div>
        <button className="taskrow-left_button" onClick={onRequestClick}>
          Request More Task
        </button>
      </div>
      <div className="taskrow-items">
        <div className="taskrow-items_container">
          <div className="iconbox doneIcon">
            <DoneRoundedIcon sx={{ color: "green" }} className="DoneRounded" />
          </div>

          <div>
            <TaskDone />
          </div>
          <p className="taskrow-items_title">Completed</p>
        </div>
        <div className="taskrow-items_container">
          <div className="iconbox progressIcon">
            <RotateRightRoundedIcon
              sx={{ color: "#042f4e" }}
              className="RotateRightRounded"
            />
          </div>

          <div>
            <TaskStarted />
          </div>
          <p className="taskrow-items_title">In Progess</p>
        </div>
        <div className="taskrow-items_container">
          <div className="iconbox queueIcon">
            <LayersRoundedIcon
              sx={{ color: "orange" }}
              className="LayersRounded"
            />
          </div>

          <div>
            <TaskLeft />
          </div>
          <p className="taskrow-items_title">In Queue</p>
        </div>
      </div>
    </div>
  );
  return content;
};

export default TaskRow;
