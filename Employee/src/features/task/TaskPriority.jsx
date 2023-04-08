import React from "react";

const TaskPriority = ({ priority }) => {
  let content;
  if (priority === "High") {
    content = (
      <div className="taskPriority high">
        <p>High</p>
      </div>
    );
  }
  if (priority === "Medium") {
    content = (
      <div className="taskPriority medium">
        <p>Medium</p>
      </div>
    );
  }
  if (priority === "Low") {
    content = (
      <div className="taskPriority low">
        <p>Low</p>
      </div>
    );
  }
  return content;
};

export default TaskPriority;
