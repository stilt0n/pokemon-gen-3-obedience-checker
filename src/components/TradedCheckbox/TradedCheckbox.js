import "./TradedCheckbox.css";

export const TradedCheckbox = ({ traded, setTraded }) => {
  return (
    <label className="checkbox-container">
      Traded?
      <input
        className="traded-checkbox"
        name="traded"
        type="checkbox"
        checked={traded}
        onChange={() => setTraded((prev) => !prev)}
      />
    </label>
  );
};
