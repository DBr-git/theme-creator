import "./Button.css";

export default function Button({ onClick, buttonContent }) {
  return (
    <button className="delete-button" onClick={onClick}>
      {buttonContent}
    </button>
  );
}
