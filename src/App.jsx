import { initialColors } from "./lib/colors";
// import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";
import { uid } from "uid";
import ColorsSection from "./Components/ColorSection/ColorSection";

function App() {
  const [themes, setThemes] = useState(initialColors);

  function handleAddTheme(newColor) {
    setThemes([...themes, { id: uid(), ...newColor }]);
  }
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddTheme={handleAddTheme} />
      <ColorsSection colors={themes} />
    </>
  );
}

export default App;
