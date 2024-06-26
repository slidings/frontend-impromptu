import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Checkbox, TextField, Typography } from "@mui/material";
import { TableRow, TableCell } from "@mui/material";

function Task({ task, i, tasks, setTasks }) {
  const taskDesc = task;
  const [newTask, setNewTask] = useState("");
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function handleTaskDelete(e, i) {
    e.preventDefault();
    setTasks([...tasks.slice(0, i), ...tasks.slice(i + 1)]);
  }

  function handleTaskUpdate(i) {
    setTasks([...tasks.slice(0, i), newTask, ...tasks.slice(i + 1)]);
    setNewTask("");
  }

  return (
    <TableRow>
      <tr key={i}>
        <TableCell>
          <Typography style={{ color: isTaskCompleted ? "green" : "black" }}>
            {taskDesc}
          </Typography>
        </TableCell>

        <TableCell>
          <Checkbox
            type="checkbox"
            checked={isTaskCompleted}
            onClick={(e) => setIsTaskCompleted(!isTaskCompleted)}
          />
        </TableCell>

        <TableCell>
          <Button
            onClick={(e) => handleTaskDelete(e, i)}
            variant="contained"
            style={{ marginRight: "20px" }}
          >
            Delete
          </Button>
        </TableCell>

        <TableCell>
          {isEditing ? (
            <form aria-label="Edit task form">
              <Textfield
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <Button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleTaskUpdate(i);
                  setNewTask("");
                  setIsEditing(false);
                }}
              >
                Edit
              </Button>

              <Button
                type="submit"
                onClick={(e) => {
                  setIsEditing(false);
                }}
                style={{ background: "red", margin: "5px" }}
              >
                Cancel
              </Button>
            </form>
          ) : (
            <Button
              onClick={(e) => {
                setIsEditing(true);
              }}
              variant="contained"
            >
              Edit
            </Button>
          )}
        </TableCell>
      </tr>
    </TableRow>
  );
}
export default Task;
