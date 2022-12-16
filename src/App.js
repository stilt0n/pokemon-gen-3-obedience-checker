import { useState } from "react";
import { RegionSelect } from "./components/RegionSelect";
import { BadgeSelect } from "./components/BadgeSelect";
import { LevelInput } from "./components/LevelInput";
import { TradedCheckbox } from "./components/TradedCheckbox";
import { getObedienceProbability, formatObedience } from "./calculators";
import "./App.css";

function App() {
  const [region, setRegion] = useState("kanto");
  const [level, setLevel] = useState(NaN);
  const [cap, setCap] = useState(10);
  const [traded, setTraded] = useState(false);
  const [result, setResult] = useState();

  const calculateResult = () => {
    if (Number.isNaN(level) || level < 0 || level > 100) {
      setResult("Please use a valid level");
      return;
    }
    setResult(formatObedience(getObedienceProbability(level, cap, traded)));
  };

  const clearResult = () => setResult(undefined);

  return (
    <div className="App">
      <h1>Gen 3 Obedience Checker</h1>
      <h2>
        <a href="https://github.com/acromyrmetica/obedienceChecker">
          Based on this obedience checker
        </a>
      </h2>
      <div className="checker-form">
        <RegionSelect region={region} setRegion={setRegion} />
        <BadgeSelect region={region} setCap={setCap} />
        <LevelInput setLevel={setLevel} />
        <TradedCheckbox traded={traded} setTraded={setTraded} />
        <button onClick={calculateResult}>Submit</button>
        <button onClick={clearResult}>Clear Result</button>
      </div>
      <div className="result">{result ? <p>{result}</p> : null}</div>
    </div>
  );
}

export default App;
