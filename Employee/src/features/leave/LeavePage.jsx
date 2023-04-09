import React from "react";
import { useGetLeaveByUserIdQuery } from "./leaveSlice";
import { Link, useNavigate } from "react-router-dom";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import "./leave.css";
import { tr } from "date-fns/locale";

const LeavePage = () => {
  const { data: leave, isLoading, isSuccess } = useGetLeaveByUserIdQuery();
  const navigate = useNavigate();

  let content;
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isSuccess) {
    let allLeave = Object.values(leave.entities);
    // const handleClick = (id) => {
    //   return navigate(`/dash/leave/${id}`);
    // };
    const handleDate = (date) => {
      const Date = parseISO(date);
      return format(Date, "PP");
    };
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
    const table = (
      <table className="table leavePage-table">
        <thead className="table-head">
          <tr className="table-row">
            <td className="table-cell table-cell_title leavePage-table_title">
              Title
            </td>
            <td className="table-cell table-cell_startDate">Start Date</td>
            <td className="table-cell table-cell_endDate">End Date</td>
            <td className="table-cell table-cell-status leavePage-table_status">
              Status
            </td>
          </tr>
        </thead>
        <tbody className="table-body">
          {allLeave.map((el) => (
            <tr
              className="table-row"
              key={el.id}
              onClick={() => navigate(`/dash/leave/${el.id}`)}
            >
              <td className="table-cell table-cell_title leavePage-table_title">
                {el.title ? el.title : "Annual"} Leave
              </td>
              <td className="table-cell table-cell_startDate">
                {handleDate(el.date_of_leave)}
              </td>
              <td className="table-cell table-cell_endDate">
                {handleDate(el.date_of_resumption)}
              </td>
              <td className="table-cell table-cell-status leavePage-table_status">
                {handleStatus(el.status)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    content = (
      <div className="leavePage-content">
        <div className="leavePage-content_title">
          <h1>Leave Applications</h1>
          <Link to={"/dash/leave/apply"} className="leavePage-content_link">
            Apply
          </Link>
        </div>
        <div className="leavePage-content_table">{table}</div>
      </div>
    );
    // console.log(leave);
  }
  return (
    <div className="leavePage">
      <div className="leavePage-container">{content}</div>
    </div>
  );
};

export default LeavePage;
