import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";

const EditTaskButton = ({ id }) => {
  const navigate = useNavigate();
  const onClickEdit = () => {
    navigate(`/dash/task/${id}`);
  };

  return (
    <IconButton onClick={onClickEdit}>
      <Edit sx={{ color: "#0e5b92" }} />
    </IconButton>
  );
};

export default EditTaskButton;
