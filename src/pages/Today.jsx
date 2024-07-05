import React, { useState } from "react";
import TaskList from "@/components/TaskList";
import AddTask from "@/components/AddTask";
import { isToday } from "date-fns";

const TodayPage = () => {
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

  const todayTasks = tasks.filter((task) => isToday(new Date(task.dueDate)));

  return (
    <div>
      <AddTask addTask={addTask} />
      <TaskList tasks={todayTasks} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
};

export default TodayPage;