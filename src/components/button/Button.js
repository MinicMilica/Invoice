import './Button.css';

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      <h3 className="buttonH3">{text}</h3>
    </button>
  );
};

export default Button;
