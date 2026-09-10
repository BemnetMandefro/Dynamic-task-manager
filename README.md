Dynamic Task Manager

A React task manager built for Sessions 1 & 2, demonstrating components,
props, events, `useState`, conditional rendering, `map()`, and keys.

Description

This project lets a user add tasks, mark them complete or incomplete,
delete individual tasks, filter the list by status (All / Active /
Completed), and clear all completed tasks at once. It also tracks live
statistics — total tasks, completed tasks, and remaining tasks — that
update automatically as the task list changes.

Two original features were added beyond the core requirements:
- **Task priority** (Low / Medium / High), shown as a colored tag on
  each task
- A **Reset All** button that clears the entire task list

How to Run

1. Install dependencies:
   ```
   npm install
   ```
2. Start the dev server:
   ```
   npm run dev
   ```
3. Open the URL it prints (usually `http://localhost:5173`).

## Project Structure

```
src/
├── components/
│   ├── TaskForm.jsx    — input, priority select, and Add button
│   ├── TaskFilter.jsx  — All / Active / Completed tabs
│   ├── TaskList.jsx    — renders the task list, handles both empty states
│   └── TaskItem.jsx    — a single task row: checkbox, priority tag, delete
├── App.jsx             — owns all state, passes data and functions down as props
├── App.css
└── main.jsx
```

JavaScript / React Concepts Used

- Functional components with props for parent → child communication
- Callback functions passed as props for child → parent communication
  (e.g. `TaskItem` calls `onDelete(task.id)`, which runs `deleteTask`
  back in `App`)
- `useState` for the input text, selected priority, task list, and
  active filter
- `onChange`, `onClick`, and `onSubmit` event handlers
- Conditional rendering — a ternary for completed-task styling, and
  early returns in `TaskList` for the two different empty states
- `map()` to render the task list and filter buttons, each with a
  stable `key` (`task.id` / `filterOption.key` — never array index)
