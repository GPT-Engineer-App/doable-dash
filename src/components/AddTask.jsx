import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePickerDemo } from "@/components/ui/date-picker";
import { v4 as uuidv4 } from "uuid";

const AddTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState(null);

  const handleAddTask = () => {
    if (taskName && dueDate) {
      addTask({ id: uuidv4(), name: taskName, dueDate, completed: false });
      setTaskName("");
      setDueDate(null);
    }
  };

  return (
    <div className="flex items-center space-x-4 mb-4">
      <Input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task name"
      />
      <DatePickerDemo selected={dueDate} onSelect={setDueDate} />
      <Button onClick={handleAddTask}>Add Task</Button>
    </div>
  );
};

export default AddTask;