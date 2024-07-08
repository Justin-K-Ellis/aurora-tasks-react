import { useState } from "react";
import Button from "../Button";

const EditingMode = ({ options, setOptions, toggleEditStatus }) => {
  const [name, setName] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setOptions([...options, name]);
    toggleEditStatus();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="editing-mode">
        <label htmlFor="add-category">
          <Button
            color="white"
            background="var(--reverse-gradient)"
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
