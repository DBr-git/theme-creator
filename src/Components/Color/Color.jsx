import "./Color.css";
import DeleteButton from "../DeleteButton/DeleteButton";
import { useState } from "react";

export default function Color({ color, onDeleteColor }) {
  const [showConfirm, setShowConfirm] = useState(false);

  function handleConfirm() {
    setShowConfirm(true);
  }

  function handleCancel() {
    setShowConfirm(false);
  }

  function handleDelete() {
    onDeleteColor(color.id);
    setShowConfirm(false);
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {showConfirm ? (
        <div className="confirmation">
          <p>Are you sure?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={handleCancel}>No</button>
        </div>
      ) : (
        <DeleteButton onDeleteColor={handleConfirm} /> // Show the delete button initially
      )}
    </div>
  );
}
