import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const TaskList = ({ tasks, toggleTaskCompletion }) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`flex items-center justify-between p-4 border rounded-lg ${
            task.completed ? "line-through text-muted" : ""
          }`}
        >
          <div>
            <h3 className="text-lg font-semibold">{task.name}</h3>
            <p className="text-sm text-muted-foreground">{task.dueDate}</p>
          </div>
          <Checkbox
            checked={task.completed}
            onCheckedChange={() => toggleTaskCompletion(task.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;