import { useState } from "react";

import Card from "./components/Card";
import Input from "./components/Input";
import Nav from "./components/Nav";

const App = () => {
  const [list, setList] = useState([]);
  const [options, setOptions] = useState(["Life", "Shopping", "Work"]);

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
      <header>
        <h1>Aurora Tasks</h1>
      </header>
      <main>
        <Nav options={options} />
        <section className="main-content">
          <Input
            list={list}
            setList={setList}
            options={options}
            setOptions={setOptions}
          />
          <h2>Your Tasks:</h2>
          <ul>
            {list.map((task) => {
              return (
                <li key={task.id}>
                  <Card
                    name={task.name}
                    description={task.description}
                    dueDate={task.dueDate}
                    category={task.selectedCategory}
                    done={task.done}
                    task={task}
                    deleteTask={deleteTask}
                    toggleDoneStatus={toggleDoneStatus}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
};

export default App;
