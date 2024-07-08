import AddCategory from "./add_cat/AddCategory";

const Nav = ({
  options,
  setOptions,
  list,
  displayList,
  setDisplayList,
  showAllTasks,
  setList,
}) => {
  function handleClick(selectedCategory) {
    const newList = list.filter((task) => task.category === selectedCategory);
    setDisplayList(newList);
  }

  return (
    <nav className="navbar">
      <h2>Lists</h2>
      <ul>
        <li onClick={showAllTasks}>All</li>
        {options.map((item) => (
          <li key={item} onClick={() => handleClick(item)}>
            {item}
          </li>
        ))}
        <AddCategory options={options} setOptions={setOptions} />
      </ul>
    </nav>
  );
};

export default Nav;
