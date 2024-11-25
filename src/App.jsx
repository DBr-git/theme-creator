import { initialColors } from "./lib/colors";
// import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";
import { uid } from "uid";
import ColorsSection from "./Components/ColorSection/ColorSection";

function App() {
  const [themes, setThemes] = useState(initialColors);
  const [editingColor, setEditingColor] = useState(null);

  function handleAddTheme(newColor, colorId = null) {
    if (colorId) {
      setThemes((prevThemes) =>
        prevThemes.map((color) =>
          color.id === colorId ? { ...color, ...newColor } : color
        )
      );
      setEditingColor(null);
    } else {
      setThemes((prevThemes) => [...prevThemes, { id: uid(), ...newColor }]);
    }
  }

  function handleDeleteColor(id) {
    setThemes((prevThemes) => prevThemes.filter((color) => color.id !== id));
  }

  function handleEdit(color) {
    console.log("edit triggered", color);
    setEditingColor(color);
  }

  console.log("editingColor in App:", editingColor);

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddTheme={handleAddTheme} existingColor={editingColor} />
      <ColorsSection
        colors={themes}
        onDeleteColor={handleDeleteColor}
        onHandleEdit={handleEdit}
      />
    </>
  );
}

export default App;
