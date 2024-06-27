import { useState } from "react";

const Input = ({ list, setList }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleNameChange(event) {
    setName((prev) => event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription((prev) => event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setList([...list, { name, description }]);
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
      <button type="submit">Add Task</button>
    </form>
  );
};

export default Input;
