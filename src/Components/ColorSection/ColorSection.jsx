import Color from "../Color/Color";
import "./ColorSection.css";

export default function ColorsSection({ colors, onDeleteColor }) {
  return (
    <div className="colors-container">
      {colors.length > 0 ? (
        colors.map((color) => (
          <Color key={color.id} color={color} onDeleteColor={onDeleteColor} />
        ))
      ) : (
        <h3 className="emptyTheme-placeholder">
          Add new colors to start your theme!
        </h3>
      )}
      ;
    </div>
  );
}
