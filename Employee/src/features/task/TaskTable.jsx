import TaskDate from "./TaskDate";
import TaskPriority from "./TaskPriority";
import TaskStatus from "./TaskStatus";
import EditTaskButton from "./EditTaskButton";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { IconButton } from "@mui/material";
const TaskTable = ({ task, perPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedData = task.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  );
  let totalPages = task.length / perPage;
  if (totalPages % 1 != 0) {
    if (Math.round(totalPages) - totalPages >= 0) {
      totalPages = Math.round(totalPages);
    } else if (totalPages - Math.round(totalPages) < 0.5) {
      totalPages = Math.round(totalPages) + 1;
    }
  }

  const pageButtons = (
    <div className='pageButtons'>
      <IconButton
        disabled={currentPage === 1}
        onClick={() => handlePagination(currentPage - 1)}>
        <KeyboardArrowLeft />
      </IconButton>
      <span>
        {currentPage} of {totalPages}
      </span>
      <IconButton
        disabled={currentPage === Math.ceil(task.length / perPage)}
        onClick={() => handlePagination(currentPage + 1)}>
        <KeyboardArrowRight />
      </IconButton>
    </div>
  );
  const table = (
    <div className='taskTable'>
      <table className='table' style={{ borderRadius: "17px !important" }}>
        <thead className='table-head'>
          <tr className='table-row'>
            <td className='table-cell table-cell_title'>Task</td>
            <td className='table-cell table-cell_status'>Status</td>
            <td className='table-cell table-cell_priority'>Priority</td>
            <td className='table-cell table-cell_date'>Due Date</td>
            {/* <td className="table-cell">Last Update</td> */}
            <td className='table-cell table-cell_actions'>Edit</td>
          </tr>
        </thead>
        <tbody className='table-body'>
          {paginatedData.map((item) => (
            <tr className='table-row' key={item.id}>
              <td className='table-cell table-cell_title'>{item?.title}</td>
              <td className='table-cell table-cell_status'>
                {<TaskStatus status={item.completion} />}
              </td>
              <td className='table-cell table-cell_priority'>
                {<TaskPriority priority={item.priority} />}
              </td>
              <td className='table-cell table-cell_date'>
                {<TaskDate date={item.dateToDeliver} />}
              </td>
              {/* <td className="table-cell table-cell_date">
                {<TaskDate date={item.updatedAt} />}
              </td> */}
              <td className='table-cell table-cell_actions'>
                <EditTaskButton id={item.id} className='editTaskIcon' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {pageButtons}
    </div>
  );
  return table;
};

export default TaskTable;
