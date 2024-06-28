import { useState } from "react";
import { nanoid } from "nanoid";

const Input = ({ list, setList }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [done, setDone] = useState(false);

  function handleNameChange(event) {
    setName((prev) => event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription((prev) => event.target.value);
  }

  function handleDateChange(event) {
    setDueDate((prev) => event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setList([...list, { name, description, dueDate, done, id: nanoid() }]);
    clearInput();
  }

  function clearInput() {
    setName("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Task Name</label>
      <input type="text" id="name" onChange={handleNameChange} value={name} />
      <label htmlFor="description">Description</label>
      <input type="text" id="description" onChange={handleDescriptionChange} />
      <label htmlFor="due-date">Due Date:</label>
      <input
        type="date"
        id="due-date"
        value={dueDate}
        onChange={handleDateChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default Input;
