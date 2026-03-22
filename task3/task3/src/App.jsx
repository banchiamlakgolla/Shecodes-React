import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const tasks = [
    { id: 1, title: "Study React", completed: true },
    { id: 2, title: "Do homework", completed: false },
    { id: 3, title: "Practice coding", completed: true },
    { id: 3, title: "Finish Projects", completed: false }
  ];

  const allCompleted = tasks.every(task => task.completed);

  return (
    <div>
      <h1>My Tasks</h1>

      {tasks.length === 0 && <p>No tasks for today!</p>}

      {allCompleted && <p>Keep up the good work!</p>}

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;