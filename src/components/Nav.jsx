const Nav = ({ options }) => {
  return (
    <nav className="navbar">
      <ul>
        {options.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
