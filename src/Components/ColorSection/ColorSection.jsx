import Color from "../Color/Color";

export default function ColorsSection({ colors }) {
  return (
    <>
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
      ;
    </>
  );
}
