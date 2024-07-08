import Button from "../Button";

const NormalMode = ({ toggleEditStatus }) => {
  return (
    <>
      <Button
        color="white"
        background="var(--reverse-gradient)"
        text="+ Add Category"
        handleClick={toggleEditStatus}
        type="button"
      />
    </>
  );
};

export default NormalMode;
