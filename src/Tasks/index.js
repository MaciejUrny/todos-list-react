import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="section__list">
        {tasks.map(task => (
            <li
                key={task.id}
                className={
                    `list ${task.done && hideDoneTasks ? " list--hidden" : ""}`}>
                <button
                    className="list__button">
                    {task.done ? "✔" : ""}
                </button>
                <span
                    className={
                        `list__task${task.done ? " list__task--done" : ""}`}>
                    {task.content}
                </span>
                <button
                    className="list__button list__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;