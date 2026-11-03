import express from "express";

const app = express();

app.use(express.json());

// Sample tasks
let tasks = [
  {
    id: 1,
    taskName: "Develop Login Page",
    assignedTo: "Rahul",
    status: "Pending",
    priority: "High",
  },
  {
    id: 2,
    taskName: "Create Dashboard",
    assignedTo: "Amit",
    status: "Completed",
    priority: "Medium",
  },
  {
    id: 3,
    taskName: "Develop Website",
    assignedTo: "Anurag",
    status: "Pending",
    priority: "High",
  },
];

// 1. GET all tasks
app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

// 2. GET task by ID
app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json(task);
});

// 3. POST - Add task
app.post("/tasks", (req, res) => {
  const { id, taskName, assignedTo, status, priority } = req.body;

  if (id === undefined || !taskName || !assignedTo || !status || !priority) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (tasks.some((t) => t.id === Number(id))) {
    return res.status(409).json({ message: "Task ID already exists" });
  }

  const newTask = {
    id: Number(id),
    taskName,
    assignedTo,
    status,
    priority,
  };

  tasks.push(newTask);

  res.status(201).json({
    message: "Task added successfully",
    task: newTask,
  });
});

// 4. PUT - Update task
app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  const { taskName, assignedTo, status, priority } = req.body;

  if (!taskName || !assignedTo || !status || !priority) {
    return res.status(400).json({ message: "All fields are required" });
  }

  task.taskName = taskName;
  task.assignedTo = assignedTo;
  task.status = status;
  task.priority = priority;

  res.status(200).json({
    message: "Task updated successfully",
    task,
  });
});

// 5. DELETE - Delete task
app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(index, 1);

  res.status(200).json({ message: "Task deleted successfully" });
});

// Invalid route
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
app.listen(4000, () => {
  console.log("Express Server running at http://localhost:4000");
});
