import { useRef } from "react"; 
export default function Tasks({ tasks, onDelete, onAdd }) {
  const taskInput = useRef();
  function taskInputHandler() {
    onAdd(taskInput.current.value.trim());
    taskInput.current.value = "";
  }
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="mb-4 flex gap-4 items-center">
        <input ref = {taskInput} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        <button
          className=" text-stone-700 hover:bg-stone-100 hover:text-stone-950"
          onClick={taskInputHandler}
        >
          Add Task
        </button>
      </div>
      {tasks.length === 0 && (
        <p className="text-stone-800 mb-4">This project has no tasks yet!</p>
      )}
      {tasks.length > 0 && (
        <ul className="mb-4 bg-stone-200 p-4 rounded-md">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between mb-3"
            >
              <span>{task.text}</span>
              <button
                className="text-stone-700  hover:text-red-700"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
