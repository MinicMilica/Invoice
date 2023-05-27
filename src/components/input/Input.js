import './Input.css';
const Input = ({ text, type, value, handleChange }) => {
  return (
    <div className="inputContainer">
      <div className="labelDiv">
        <label>{text}</label>
      </div>
      <div className="inputDiv">
        <input type={type} value={value} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Input;
