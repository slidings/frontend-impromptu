import React from "react";
import { useState } from "react";
import Task from "./Task";
import { List } from "@mui/material";
function TaskList({ tasks, setTasks }) {
  return (
    <center>
      <h2>Task list</h2>
      <List>
        {tasks.map((task, i) => {
          return <Task task={task} i={i} tasks={tasks} setTasks={setTasks} />;
        })}
      </List>
    </center>
  );
}

export default TaskList;
