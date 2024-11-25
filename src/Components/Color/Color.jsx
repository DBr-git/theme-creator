import "./Color.css";
import Button from "../Button/Button";
import { useState } from "react";

export default function Color({ color, onDeleteColor, onHandleEdit }) {
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
        <div className="button-container">
          <Button onClick={handleConfirm} buttonContent={"Delete"} />
          <Button onClick={() => onHandleEdit(color)} buttonContent={"Edit"} />
        </div>
      )}
    </div>
  );
}
