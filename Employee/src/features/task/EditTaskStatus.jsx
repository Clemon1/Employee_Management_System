import React, { useState } from "react";
import { useUpdateTaskMutation } from "./taskSlice";

const EditTaskStatus = ({ id }) => {
  const [status, setStatus] = useState("");

  const [updateTask, { isLoading }] = useUpdateTaskMutation();
  const onSaveClicked = async (e) => {
    e.preventDefault();
    try {
      await updateTask({ id, completion: status }).unwrap();
      setStatus("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="taskStatus-container">
      <form onSubmit={onSaveClicked} className="taskStatus-form">
        <label htmlFor="status" className="taskStatus-label">
          Change Task Status
        </label>
        <div className="taskStatus-select_con">
          <select
            id="status"
            defaultValue={status}
            onChange={(e) => setStatus(e.target.value)}
            className="taskStatus-select"
          >
            <option className="taskStatus-option" value="">
              Select Status
            </option>
            <option className="taskStatus-option" value="Pending">
              In Queue
            </option>
            <option className="taskStatus-option" value="Completed">
              Completed
            </option>
            <option className="taskStatus-option" value="Started">
              In Progress
            </option>
            <option className="taskStatus-option" value="Late Delivery">
              Late
            </option>
          </select>
          <button className="taskStatus-button">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default EditTaskStatus;
