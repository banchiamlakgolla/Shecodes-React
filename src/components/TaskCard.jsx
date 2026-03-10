function TaskCard({ title, dueDate, status }) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "15px",
      margin: "10px",
      borderRadius: "8px"
    }}>
      <h3>{title}</h3>
      <p>Due Date: {dueDate}</p>
      <p>Status: {status}</p>
    </div>
  )
}

export default TaskCard