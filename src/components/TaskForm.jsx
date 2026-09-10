import { useState } from "react"
function TaskForm({ onAddTask }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");

  function handleSubmit(event) {
    event.preventDefault(); 
    onAddTask(text, priority);
    setText(""); 
    setPriority("Medium");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Add a task…"
        aria-label="New task"
      />
      <select
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
        aria-label="Task priority"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;