import Button from "./Button";

const Card = ({
  name,
  description,
  dueDate,
  done,
  category,
  task,
  deleteTask,
  toggleDoneStatus,
}) => {
  const color = done === true ? "gray" : "black";
  const textDecorationLine = done === true ? "line-through" : "none";

  return (
    <div className="card" style={{ color, textDecorationLine }}>
      <p className="task-name">{name}</p>
      <p className="task-description">{description}</p>
      <div className="cat-due">
        <p>
          Category: <span className="category">{category}</span>
        </p>
        <p>Due: {dueDate}</p>
      </div>
      <Button
        text={done === true ? "Not done" : "Done!"}
        color="white"
        background="var(--accent-color)"
        handleClick={() => toggleDoneStatus(task.id)}
        type=""
      />
      <Button
        text="Delete"
        color="white"
        background="var(--primary-color)"
        handleClick={() => deleteTask(task)}
        type="button"
      />
    </div>
  );
};

export default Card;
