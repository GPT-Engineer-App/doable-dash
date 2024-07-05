import React, { useState } from "react";
import TaskList from "@/components/TaskList";
import AddTask from "@/components/AddTask";
import { isFuture } from "date-fns";

const UpcomingPage = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const upcomingTasks = tasks.filter((task) => isFuture(new Date(task.dueDate)));

  return (
    <div>
      <AddTask addTask={addTask} />
      <TaskList tasks={upcomingTasks} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
};

export default UpcomingPage;