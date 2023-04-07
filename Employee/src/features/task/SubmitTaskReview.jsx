import React, { useState } from "react";
import { useUpdateTaskMutation } from "./taskSlice";

const SubmitTaskReview = ({ id }) => {
  const [review, setReview] = useState(false);
  const [reviewComment, setReviewComment] = useState("");

  const [updateTask, { isLoading }] = useUpdateTaskMutation();
  const onSaveClicked = async (e) => {
    e.preventDefault();
    try {
      // console.log("this is review before submit", review);
      await updateTask({ id, review, reviewComment }).unwrap();
      // console.log("task review value", review);
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
