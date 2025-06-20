import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "../components/Button";
import Card from "../components/Card";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter(task =>
    filter === "all" ? true :
    filter === "active" ? !task.completed :
    task.completed
  );

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Task Manager</h2>

      <div className="flex gap-2">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 flex-grow rounded dark:bg-gray-700"
          placeholder="Enter a new task"
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="space-x-2">
        {["all", "active", "completed"].map(type => (
          <Button
            key={type}
            variant={filter === type ? "primary" : "secondary"}
            onClick={() => setFilter(type)}
          >
            {type}
          </Button>
        ))}
      </div>

      <div className="space-y-2">
        {filteredTasks.map(task => (
          <Card key={task.id} className="flex items-center justify-between">
            <div
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
            >
              {task.text}
            </div>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
