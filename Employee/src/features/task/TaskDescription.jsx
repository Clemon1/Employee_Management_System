import React from "react";

const TaskDescription = ({ description }) => {
  return (
    <div className="taskDescription">
      <p className="taskDescription-text">{description}</p>
    </div>
  );
};

export default TaskDescription;
