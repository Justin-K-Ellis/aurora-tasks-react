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
  return (
    <div className="card">
      <p>Task: {name}</p>
      <p>{description}</p>
      <p>Due: {dueDate}</p>
      <p>Category: {category}</p>
      <button type="button" onClick={() => toggleDoneStatus(task.id)}>
        {done === true ? "Done" : "Not done"}
      </button>
      <button type="button" onClick={() => deleteTask(task)}>
        Delete
      </button>
    </div>
  );
};

export default Card;
