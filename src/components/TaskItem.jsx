function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <label className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className={task.completed ? "task-text task-text-done" : "task-text"}>
          {task.text}
        </span>
      </label>

      <div className="task-meta">
        <span className={`priority-tag priority-${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
        <button
          className="text-button text-button-muted"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;