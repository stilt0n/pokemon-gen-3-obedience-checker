export const TradedCheckbox = ({ traded, setTraded }) => {
  return (
    <label>
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
