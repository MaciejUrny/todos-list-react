import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="section__list">
        {tasks.map(task => (
            <li
                key={task.id}
                className={
                    `list ${task.done && hideDone ? " list--hidden" : ""}`}>
                <button
                    className="list__button"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                <span
                    className={
                        `list__task${task.done ? " list__task--done" : ""}`}>
                    {task.content}
                </span>
                <button
                    className="list__button list__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;