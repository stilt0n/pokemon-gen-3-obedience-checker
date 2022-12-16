import { useState } from "react";

export const LevelInput = ({ setLevel }) => {
  const [input, setInput] = useState("");
  const onChange = (event) => {
    setInput(event.target.value);
    setLevel(parseInt(event.target.value));
  };
  return (
    <div className="level-input">
      <label>
        Pokemon Level:
        <input
          type="text"
          placeholder="Enter Level"
          value={input}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
