import { useCreateLeaveMutation } from "./leaveSlice";
import React, { useState, useEffect } from "react";

const LeaveForm = () => {
  const [leaveReason, setLeaveReason] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [createLeave, { isLoading, isSuccess }] = useCreateLeaveMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createLeave({
        id,
        reason: leaveReason,
        date_of_leave: startDate,
        date_of_resumption: endDate,
      });
    } catch (err) {
      console.log(err);
    }
  };
  let content = <form></form>;
  return content;
};

export default LeaveForm;
