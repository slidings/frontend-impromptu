import React from "react";
import { useState } from "react";
import TaskList from "./TaskList";
import { Button, Container, Box, TextField } from "@mui/material";


function TaskManager({username, tasks, setTasks }) {
  const [newTask, setNewTask] = useState("");
  //name = username;

  function handleNewServiceSubmit(event) {
    event.preventDefault();
    setTasks([{ task: `${username}'s Service: ${newTask}`, completed: false }, ...tasks]);
    setNewTask("");
  }

  function handleNewRequestSubmit(event) {
    event.preventDefault();
    setTasks([{ task: `${username}'s Request: ${newTask}`, completed: false }, ...tasks]);
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
            size="medium"
            variant="contained"
            type="submit"
            onClick={handleNewServiceSubmit}
            style={{ margin: "10px" }}
          >
            Service
          </Button>
          <Button
            size="medium"
            variant="contained"
            type="submit"
            onClick={handleNewRequestSubmit}
            style={{ margin: "10px" }}
          >
            Request
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
