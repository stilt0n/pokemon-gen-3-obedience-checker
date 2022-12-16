import { useState } from "react";
import "./LevelInput.css";

export const LevelInput = ({ setLevel }) => {
  const [input, setInput] = useState("");
  const onChange = (event) => {
    setInput(event.target.value);
    setLevel(parseInt(event.target.value));
  };
  return (
    <div className="container">
      <label>Level:</label>
      <input
        className="level-input"
        type="text"
        placeholder="Enter Level"
        value={input}
        onChange={onChange}
      />
    </div>
  );
};
