import { useState, useEffect } from "react";

export default function ContrastScore({ color, onError }) {
  const [score, setScore] = useState(null);

  useEffect(() => {
    async function postFetch() {
      try {
        const response = await fetch(
          "https://www.aremycolorsaccessible.com/api/are-they",
          {
            method: "POST",
            body: JSON.stringify({ colors: [color.contrastText, color.hex] }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setScore(data.overall);
      } catch (error) {
        console.error("Fetch error:", error);
        onError?.(error);
      }
    }

    postFetch();
  }, [color, onError]);

  if (!score) {
    return <p>Loading Contrast Score...</p>;
  }

  return <p>Contrast Score: {score}</p>;
}
