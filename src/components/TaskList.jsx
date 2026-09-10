import TaskItem from "./taskitem";

function TaskList({ tasks, totalTasks, onToggle, onDelete }) {
  if (totalTasks === 0) {
    return (
      <p className="empty-state">No tasks yet. Add your first task above.</p>
    );
  }

  if (tasks.length === 0) {
    return <p className="empty-state">No tasks match this filter.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;