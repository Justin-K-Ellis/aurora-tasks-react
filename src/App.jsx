import { useState } from "react";

import Card from "./components/Card";
import Input from "./components/Input";

const App = () => {
  const [list, setList] = useState([]);

  function deleteTask(taskToDel) {
    const remainingTasks = list.filter((task) => task !== taskToDel);
    setList(remainingTasks);
  }

  function toggleDoneStatus(id) {
    const updatedTasks = list.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setList(updatedTasks);
  }

  return (
    <>
      <h1>Aurora Tasks</h1>
      <Input list={list} setList={setList} />
      <h2>Your Tasks:</h2>
      <ul>
        {list.map((task) => {
          return (
            <li key={task.id}>
              <Card
                name={task.name}
                description={task.description}
                dueDate={task.dueDate}
                done={task.done}
                task={task}
                deleteTask={deleteTask}
                toggleDoneStatus={toggleDoneStatus}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
