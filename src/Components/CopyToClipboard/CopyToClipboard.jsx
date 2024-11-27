import "./CopyToClipboard.css";
import { useState, useEffect } from "react";

export default function CopyToClipboard({ hexCode }) {
  const [copied, setCopied] = useState(false);

  async function handleCopyToClipboard() {
    try {
      await navigator.clipboard.writeText(hexCode ? hexCode : "");
      setCopied(true);
    } catch (error) {
      console.error("Failed to copy:", error.message);
    }
  }

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <>
      {copied ? (
        <div className="button-wrapper">
          <button className="copyButton">
            <img src="/clipboard-check.svg" alt="Copied" />
          </button>
          <p>Copied to clipboard!</p>
        </div>
      ) : (
        <div className="button-wrapper">
          <button className="copyButton" onClick={handleCopyToClipboard}>
            <img src="/clipboard-copy.svg" alt="Copy" />
          </button>
        </div>
      )}
    </>
  );
}
