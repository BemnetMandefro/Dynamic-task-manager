import { useState, useRef } from "react";
import TaskForm from "./components/taskform";
import TaskFilter from "./components/taskfilter";
import TaskList from "./components/tasklist";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const nextId = useRef(1);

  function addTask(text, priority) {
    const trimmed = text.trim();
    if (trimmed === "") return; 
    const newTask = {
      id: nextId.current,
      text: trimmed,
      completed: false,
      priority,
    };
    nextId.current += 1;

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function clearCompleted() {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  }

  function resetAll() {
    setTasks([]);
  }

  const totalTasks = tasks.length;
  const completedCount = tasks.filter((task) => task.completed).length;
  const activeCount = totalTasks - completedCount;

  const visibleTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true; // "all"
  });

  return (
    <div className="page">
      <header className="page-header">
        <h1>Dynamic Task Manager</h1>
        <p className="tagline">A short list, kept honest.</p>
      </header>

      <section className="stats" aria-label="Task statistics">
        <span>
          <strong>{totalTasks}</strong> total
        </span>
        <span className="stats-divider">·</span>
        <span>
          <strong>{completedCount}</strong> done
        </span>
        <span className="stats-divider">·</span>
        <span>
          <strong>{activeCount}</strong> remaining
        </span>
      </section>

      <TaskForm onAddTask={addTask} />

      <TaskFilter currentFilter={filter} onFilterChange={setFilter} />

      <TaskList
        tasks={visibleTasks}
        totalTasks={totalTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />

      <div className="bulk-actions">
        <button
          className="text-button"
          onClick={clearCompleted}
          disabled={completedCount === 0}
        >
          Clear completed
        </button>
        <button
          className="text-button text-button-muted"
          onClick={resetAll}
          disabled={totalTasks === 0}
        >
          Reset all
        </button>
      </div>
    </div>
  );
}

export default App;