const Button = ({ color, background, text, handleClick, type }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      style={{ color: color, background: background }}
      className="delete-btn"
    >
      {text}
    </button>
  );
};

export default Button;
