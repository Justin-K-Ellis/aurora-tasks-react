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
      <p>Task: {name}</p>
      <p>{description}</p>
      <div className="cat-due">
        <p>
          Category: <span className="category">{category}</span>
        </p>
        <p>Due: {dueDate}</p>
      </div>
      <Button
        text={done === true ? "Not done" : "Done!"}
        color="white"
        background="green"
        handleClick={() => toggleDoneStatus(task.id)}
        type=""
      />
      {/* <button type="button" onClick={() => toggleDoneStatus(task.id)}>
        {done === true ? "Not done" : "Done!"}
      </button> */}
      <Button
        text="Delete"
        color="white"
        background="red"
        handleClick={() => deleteTask(task)}
        type="button"
      />
    </div>
  );
};

export default Card;
