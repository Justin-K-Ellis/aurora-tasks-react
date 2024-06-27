import { useState } from "react";

import Input from "./components/Input";

const App = () => {
  const [list, setList] = useState([]);

  function deleteTask(taskToDel) {
    const remainingTasks = list.filter((task) => task !== taskToDel);
    setList(remainingTasks);
  }

  return (
    <>
      <h1>Aurora Tasks</h1>
      <Input list={list} setList={setList} />
      <h2>Your Tasks:</h2>
      <ul>
        {list.map((t) => {
          return (
            <li key={t}>
              <p>Task: {t.name}</p>
              <p>Description: {t.description}</p>
              <button type="button" onClick={() => deleteTask(t)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
