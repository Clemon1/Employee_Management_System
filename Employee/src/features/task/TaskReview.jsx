import React from "react";
import TaskDate from "./TaskDate";
import { Link } from "react-router-dom";
import { PermMediaOutlined, FileDownload } from "@mui/icons-material";

const TaskReview = ({ review }) => {
  if (!review) {
    return <p>No reviews found</p>;
  }
  const content = (
    <div className="taskReviews">
      <div className="taskReviews-content">
        <h2>{review.title}</h2>
        <i>by {review.employee.fullname}</i>
        <p>{review.reviewComment}</p>
        <div className="taskReviews-content_link">
          <Link
            to={`/dash/task/${review.id}`}
            style={{
              textDecoration: "none",
              color: "white",
              width: "100%",
              textAlign: "center",
            }}
            className="LinkStyle"
          >
            View task
          </Link>
        </div>
        {/* <div className="taskReviews-content_file">
          <div className="taskReviews-content_file-icon">
            <PermMediaOutlined sx={{ color: "#0e5b92", fontSize: "18px" }} />
          </div>
          <div className="taskReviews-content_file-text">
            <p>Home Preview.jpg</p>
            <p>1.1 MB</p>
          </div>
          <FileDownload sx={{ color: "#0e5b92", fontSize: "18px" }} />
        </div> */}
        <TaskDate date={review.updatedAt} />
      </div>
    </div>
  );
  return content;
};

export default TaskReview;
