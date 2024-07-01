import { useState } from "react";
import { nanoid } from "nanoid";

import Button from "./Button";

const Input = ({ list, setList, options, showAllTasks }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState(options[0]);

  function handleNameChange(event) {
    setName((prev) => event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription((prev) => event.target.value);
  }

  function handleDateChange(event) {
    setDueDate((prev) => event.target.value);
  }

  function handleCategory(event) {
    setCategory((prev) => event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setList([...list, { name, description, dueDate, id: nanoid(), category }]);
    // clearInput();
    showAllTasks();
  }

  function clearInput() {
    setName("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input-group">
        <label htmlFor="name">Task Name</label>
        <input type="text" id="name" onChange={handleNameChange} value={name} />
      </div>
      <div className="input-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          onChange={handleDescriptionChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="due-date">Due Date:</label>
        <input
          type="date"
          id="due-date"
          value={dueDate}
          onChange={handleDateChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="category-options">Category</label>
        <select
          name="category-options"
          id="category-options"
          onChange={handleCategory}
        >
          {options.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
      <div className="input-group">
        {/* <button type="submit">Add Task</button> */}
        <Button
          color="white"
          background="purple"
          text="Add Task"
          handleClick={null}
          type="submit"
        />
      </div>
    </form>
  );
};

export default Input;
