function TaskFilter({ currentFilter, onFilterChange }) {
  const filters = [
    { key: "all", label: "All" },
    { key: "incomplete", label: "Active" },
    { key: "completed", label: "Completed" },
  ];

  return (
    <nav className="task-filter" aria-label="Filter tasks">
      {filters.map((filterOption) => (
        <button
          key={filterOption.key}
          className={
            currentFilter === filterOption.key
              ? "filter-button filter-button-active"
              : "filter-button"
          }
          onClick={() => onFilterChange(filterOption.key)}
        >
          {filterOption.label}
        </button>
      ))}
    </nav>
  );
}

export default TaskFilter;