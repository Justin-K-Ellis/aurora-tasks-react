const Nav = ({ options, list, displayList, setDisplayList, showAllTasks }) => {
  // function showAllTasks() {
  //   setDisplayList(list);
  // }

  function handleClick(selectedCategory) {
    const newList = list.filter((task) => task.category === selectedCategory);
    setDisplayList(newList);
  }

  return (
    <nav className="navbar">
      <ul>
        <li onClick={showAllTasks}>All</li>
        {options.map((item) => (
          <li key={item} onClick={() => handleClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
