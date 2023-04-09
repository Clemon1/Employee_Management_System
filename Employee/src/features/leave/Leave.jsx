import { useParams } from "react-router-dom";
import { useGetLeaveByUserIdQuery } from "./leaveSlice";
import { parseISO, format } from "date-fns";
import { Link } from "react-router-dom";
import "./leave.css";

const Leave = () => {
  const { id } = useParams();
  const { data: leave, isLoading, isSuccess } = useGetLeaveByUserIdQuery();
  let content;
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isSuccess) {
    const singleLeave = Object.values(leave.entities).find(
      (leave) => leave._id === id
    );
    const handleStatus = (status) => {
      if (status === "Pending") {
        return (
          <p className="leavePage-status leavePage-status_pending">Pending</p>
        );
      }
      if (status === "Rejected") {
        return (
          <p className="leavePage-status leavePage-status_rejected">Rejected</p>
        );
      }
      if (status === "Approved") {
        return (
          <p className="leavePage-status leavePage-status_approved">Approved</p>
        );
      }
    };
    const handleDate = (date) => {
      const Date = parseISO(date);
      return format(Date, "PP");
    };
    // console.log(singleLeave);
    content = (
      <div className="leaveSingle">
        <div className="leaveSingle-main">
          <div className="leaveSingle-main_title">
            <h3>
              {singleLeave.title ? singleLeave.title : "Annual"} Leave Request{" "}
              <span>by {singleLeave.employee.fullname}</span>
            </h3>
            {handleStatus(singleLeave.status)}
            <p>Reason for Leave</p>
          </div>
          <div className="leaveSingle-main_reason">
            <p>{singleLeave.reason}</p>
          </div>
          <div className="leaveSingle-main_dates">
            <p className="leaveSingle-main_startDate">
              Start Date: {handleDate(singleLeave.date_of_leave)}
            </p>
            <p className="leaveSingle-main_startDate">
              End Date: {handleDate(singleLeave.date_of_resumption)}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="leavePage">
      <div className="leavePage-container">{content}</div>
    </div>
  );
};

export default Leave;
