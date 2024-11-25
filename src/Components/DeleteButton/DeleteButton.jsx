import "./DeleteButton.css";

export default function DeleteButton({ onDeleteColor }) {
  return (
    <button className="delete-button" onClick={onDeleteColor}>
      Delete
    </button>
  );
}
