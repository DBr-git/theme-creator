import "./ColorForm.css";
import { useState } from "react";

export default function ColorForm({ onAddTheme }) {
  const [hexValue, setHexValue] = useState("#000000");
  const [contrastHexValue, setContrastHexValue] = useState("#FFFFFF");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddTheme(data);
    event.target.reset();
  }

  function isValidHex(hex) {
    return /^#[0-9A-Fa-f]{6}$/.test(hex);
  }

  function handleHexChange(event) {
    const value = event.target.value;
    if (value === "" || value.length <= 7) {
      setHexValue(value);
    }

    if (value.length === 7 && isValidHex(value)) {
      setHexValue(value);
    }
  }

  function handleContrastHexChange(event) {
    const value = event.target.value;
    if (value === "" || value.length <= 7) {
      setContrastHexValue(value);
    }

    if (value.length === 7 && isValidHex(value)) {
      setContrastHexValue(value);
    }
  }

  return (
    <form className="color-card--form" onSubmit={handleSubmit}>
      <label htmlFor="role-input">Role</label>
      <input type="text" name="role" id="role-input"></input>
      <label htmlFor="hexText-input">Hex</label>
      <div className="color-input--wrapper">
        <input
          type="text"
          name="hex"
          id="hexText-input"
          className="color-input--text"
          value={hexValue}
          onChange={handleHexChange}
        ></input>
        <input
          type="color"
          name="hex"
          className="color-input"
          value={isValidHex(hexValue) ? hexValue : "#000000"}
          onChange={handleHexChange}
        ></input>
      </div>
      <label htmlFor="contrastText-input">Contrast Text</label>
      <div className="color-input--wrapper">
        <input
          type="text"
          name="contrastText"
          id="contrastText-input"
          className="color-input--text"
          value={contrastHexValue}
          onChange={handleContrastHexChange}
        ></input>
        <input
          type="color"
          name="contrastText"
          className="color-input"
          value={isValidHex(contrastHexValue) ? contrastHexValue : "#FFFFFF"}
          onChange={handleContrastHexChange}
        ></input>
      </div>
      <button type="submit">Add Color</button>
    </form>
  );
}