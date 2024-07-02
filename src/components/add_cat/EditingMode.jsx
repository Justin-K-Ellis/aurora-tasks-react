import { useState } from "react";
import Button from "../Button";

const EditingMode = ({ options, setOptions, toggleEditStatus }) => {
  const [name, setName] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    // console.log(options); // Why is this undefined?
    setOptions([...options, name]);
    toggleEditStatus();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="add-category">
          <Button
            color="black"
            background="lightgray"
            text="→"
            handleClick={null}
            type="submit"
          />
        </label>
        <input
          type="text"
          id="add-category"
          name="add-category"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </form>
    </>
  );
};

export default EditingMode;
