import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetTasksByUserIdQuery } from "./taskSlice";
import TaskDate from "./TaskDate";
import TaskPriority from "./TaskPriority";
import TaskStatus from "./TaskStatus";

const TaskData = ({ task }) => {
  let rows;

  if (task) {
    rows = task.map((row) => (
      <TableRow key={row.id} sx={{ height: "30px", padding: "0" }}>
        <TableCell>{row.title}</TableCell>
        <TableCell>
          <TaskStatus status={row.completion} />
        </TableCell>
        <TableCell>
          <TaskPriority priority={row.priority} />
        </TableCell>
        <TableCell>
          <TaskDate date={row.dateToDeliver} />
        </TableCell>
      </TableRow>
    ));
  }

  const content = (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Due Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
  return content;
};

export default TaskData;
