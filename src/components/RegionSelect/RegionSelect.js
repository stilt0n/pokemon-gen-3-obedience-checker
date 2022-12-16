export const RegionSelect = ({ region, setRegion }) => {
  const onSelect = (event) => setRegion(event.target.value);
  return (
    <div className="container">
      <label>Select your version:</label>
      <select value={region} onChange={onSelect}>
        <option value="kanto">Fire Red / Leaf Green</option>
        <option value="hoenn">Ruby / Sapphire / Emerald</option>
      </select>
    </div>
  );
};
