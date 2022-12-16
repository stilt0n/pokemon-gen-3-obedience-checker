import { useState } from "react";
import { badges } from "../../calculators";
import { capitalized } from "../../util";

export const BadgeSelect = ({ region, setCap }) => {
  const badgeNames = Object.keys(badges[region]);
  const [selectedBadge, setSelectedBadge] = useState("none");
  const onSelect = (event) => {
    const badge = event.target.value;
    setSelectedBadge(badge);
    setCap(badges[region][badge]);
  };
  return (
    <div className="container">
      <label>Select your highest badge:</label>
      <select value={selectedBadge} onChange={onSelect}>
        {badgeNames.map((badge, index) => (
          <option value={badge}>{`${index}: ${capitalized(badge)}`}</option>
        ))}
      </select>
    </div>
  );
};
