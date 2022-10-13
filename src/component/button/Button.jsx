import "./Button.scss";

const Button = (props) => {
  return (
    <div className="buttons">
      <button value="prev" onClick={props.func}>
        Prev
      </button>
      <button value="next" onClick={props.func}>
        Next
      </button>
    </div>
  );
};

export default Button;
