import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Snackbar } from "@mui/material";
import { Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import Alert from "@mui/material";

import { useCreateLeaveMutation } from "./leaveSlice";
import React, { useState, useEffect } from "react";
import "./leave.css";

const LeaveForm = () => {
  const [leaveReason, setLeaveReason] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [title, setTitle] = useState("");

  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("users"));

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setOpen(true);
    }
    setOpen(false);
  };

  const employee = user._id;
  const navigate = useNavigate();

  const [createLeave, { isLoading, isSuccess }] = useCreateLeaveMutation();
  const handleStartDate = (date) => {
    setStartDate(date);
  };
  const handleEndDate = (date) => {
    setEndDate(date);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createLeave({
        employee,
        reason: leaveReason,
        date_of_leave: startDate,
        date_of_resumption: endDate,

        title,
      });
      setTitle("");
      setLeaveReason("");
      setStartDate(null);
      setEndDate(null);
      setFullname("");
      if (response) {
        setOpen(true);
      }
      navigate("/dash/leave");
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(title);
  let content = (
    <form onSubmit={handleSubmit} className='leaveform'>
      <div className='leaveform-title'>
        <h2>Leave Application</h2>
      </div>

      <div className='leaveform-group'>
        <label htmlFor='title' className='leaveform-group_label'>
          Choose Title
        </label>
        <select
          id='title'
          onChange={(e) => setTitle(e.target.value)}
          className='leaveform-group_select'>
          <option value=''>Select Title</option>
          <option value='Annual'>Annual</option>
          <option value='Medical'>Medical</option>
          <option value='Emergency'>Emergency</option>
          <option value='Compassionate'>Compassionate</option>
        </select>
      </div>
      <div className='leaveform-group'>
        <label htmlFor='startDate' className='leaveform-group_label'>
          Start Date
        </label>
        <DatePicker
          selected={startDate}
          onChange={handleStartDate}
          className='leaveform-group_date'
          id='startDate'
        />
      </div>
      <div className='leaveform-group'>
        <label htmlFor='endDate' className='leaveform-group_label'>
          End Date
        </label>
        <DatePicker
          selected={endDate}
          onChange={handleEndDate}
          className='leaveform-group_date'
          id='endDate'
        />
      </div>
      <div className='leaveform-group'>
        <label htmlFor='reason' className='leaveform-group_label'>
          Reason for leave
        </label>
        <textarea
          name='reason'
          id='reason'
          cols='30'
          rows='5'
          onChange={(e) => setLeaveReason(e.target.value)}
          className='leaveform-group_input leaveform-group_textarea'></textarea>
      </div>
      <button className='leaveform-button'>submit</button>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message='Leave Application Submitted'
        // action={action}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </form>
  );
  return <div className='leavePage'>{content}</div>;
};

export default LeaveForm;
