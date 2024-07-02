import Button from "../Button";

const NormalMode = ({ toggleEditStatus }) => {
  return (
    <>
      <Button
        color="black"
        background="lightgray"
        text="+ Add Category"
        handleClick={toggleEditStatus}
        type="button"
      />
    </>
  );
};

export default NormalMode;
