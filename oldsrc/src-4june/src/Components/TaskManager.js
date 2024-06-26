import React from "react";
import { useState } from "react";
import TaskList from "./TaskList";
import { Button, Container, Box, TextField } from "@mui/material";

function TaskManager({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState("");
  function handleNewTaskSubmit(event) {
    event.preventDefault();
    setTasks([{ task: newTask, completed: false }, ...tasks]);
    setNewTask("");
  }

  return (
    <center>
      <Box component="main" className="container" width="80%">
        <h2>Add new task</h2>
        <form>
          <TextField
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            variant="outlined"
            label="Enter a task"
          />
          <br />
          <Button
            size="large"
            variant="contained"
            type="submit"
            onClick={handleNewTaskSubmit}
            style={{ margin: "10px" }}
          >
            Add
          </Button>
        </form>
        {tasks.length > 0 ? (
          <TaskList tasks={tasks} setTasks={setTasks} />
        ) : (
          <p>There are no tasks left....</p>
        )}
      </Box>
    </center>
  );
}

export default TaskManager;
