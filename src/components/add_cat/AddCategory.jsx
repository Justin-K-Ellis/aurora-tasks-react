import { useState } from "react";
import NormalMode from "./NormalMode";
import EditingMode from "./EditingMode";

const AddCategory = ({ options, setOptions }) => {
  const [editing, setEditing] = useState(false);

  function toggleEditStatus() {
    setEditing(!editing);
  }

  return editing === true ? (
    <EditingMode
      toggleEditStatus={toggleEditStatus}
      options={options}
      setOptions={setOptions}
    />
  ) : (
    <NormalMode toggleEditStatus={toggleEditStatus} />
  );
};

export default AddCategory;
