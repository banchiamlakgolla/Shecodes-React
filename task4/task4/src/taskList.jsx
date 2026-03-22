import React, { useState, useEffect } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = [
      { id: 1, title: "Buy groceries", completed: false },
      { id: 2, title: "Do laundry", completed: true },
      { id: 3, title: "Finish React homework", completed: false },
      { id: 4, title: "Call mom", completed: true },
      { id: 5, title: "Read a book", completed: false },
    ];
    setTasks(data);
    setLoading(false);
  }, []);

  if (loading) return <div>Loading tasks...</div>;

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.completed ? "(Done)" : "(Pending)"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
