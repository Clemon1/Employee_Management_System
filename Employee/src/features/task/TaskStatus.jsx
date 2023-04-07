import React from "react";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import RotateRightRoundedIcon from "@mui/icons-material/RotateRightRounded";

const TaskStatus = ({ status }) => {
  let content;
  if (status === "Completed") {
    content = (
      <div className="taskStatus">
        <div className="iconbox taskStatus-icon doneIcon">
          <DoneRoundedIcon sx={{ color: "green", fontSize: "18px" }} />
        </div>
        <p>Completed</p>
      </div>
    );
  }
  if (status === "Started") {
    content = (
      <div className="taskStatus">
        <div className="iconbox taskStatus-icon progressIcon">
          <RotateRightRoundedIcon sx={{ color: "#042f4e", fontSize: "18px" }} />
        </div>
        <p>In Progress</p>
      </div>
    );
  }
  if (status === "Pending") {
    content = (
      <div className="taskStatus">
        <div className="iconbox taskStatus-icon queueIcon">
          <LayersRoundedIcon sx={{ color: "orange", fontSize: "18px" }} />
        </div>
        <p>In Queue</p>
      </div>
    );
  }
  return content;
};

export default TaskStatus;
