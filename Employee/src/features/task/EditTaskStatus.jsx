import React, { useState } from "react";
import { useUpdateTaskMutation } from "./taskSlice";
import { Snackbar } from "@mui/material";

const EditTaskStatus = ({ id }) => {
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);

  const [updateTask, { isLoading }] = useUpdateTaskMutation();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setOpen(true);
    }
    setOpen(false);
  };
  const onSaveClicked = async (e) => {
    e.preventDefault();
    try {
      const response = await updateTask({ id, completion: status }).unwrap();
      if (response) {
        setOpen(true);
      }
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

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Status Updated Successfully"
        // action={action}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </div>
  );
};

export default EditTaskStatus;
