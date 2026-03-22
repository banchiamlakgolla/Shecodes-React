import TaskCard from "./components/TaskCard"

function App() {
  return (
    <>
      <h1>My Tasks</h1>

      <TaskCard
        title="Finish Assignment"
        dueDate="March 12"
      />

      <TaskCard
        title="Study Props"
        dueDate="March 15"
      />

      <TaskCard
        title="Submit Project"
        dueDate="March 20"
      />
    </>
  )
}

export default App