import React, { useState } from "react";
import { useUpdateTaskMutation } from "./taskSlice";
import { Snackbar } from "@mui/material";
const SubmitTaskReview = ({ id }) => {
  const [review, setReview] = useState(false);
  const [open, setOpen] = useState(false);
  const [reviewComment, setReviewComment] = useState("");

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
      // console.log("this is review before submit", review);
      const response = await updateTask({ id, review, reviewComment }).unwrap();
      // console.log("task review value", review);
      if (response) {
        setOpen(true);
      }
      setReview(false);
      setReviewComment("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="taskStatus-container">
      <form onSubmit={onSaveClicked} className="taskStatus-form">
        <label htmlFor="review" className="taskStatus-label">
          Submit Task for Review
        </label>
        <div className="taskStatus-comment">
          <textarea
            name="review"
            id="review"
            cols="30"
            rows="10"
            className="taskStatus-comment_area"
            placeholder="Add Task Comments here"
            onChange={(e) => {
              setReviewComment(e.target.value);
              setReview(true);
            }}
            required
          ></textarea>
          <button className="taskStatus-button">Submit</button>
        </div>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Review Submitted Successfully"
        // action={action}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </div>
  );
};

export default SubmitTaskReview;
/*
          <select
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="taskStatus-select"
          >
            <option className="taskStatus-option" value="">
              Select Review
            </option>
            <option className="taskStatus-option" value="false">
              False
            </option>
            <option className="taskStatus-option" value="true">
              True
            </option>
          </select>
*/
