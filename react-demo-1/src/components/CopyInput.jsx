import React, { useState } from "react";
import Modal from "./Modal";

const CopyInput = () => {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(input).then(() => setCopied(true));
    setTimeout(() => setCopied(false), 3000);
  };
  return (
    <div>
      <h1>Copy Input</h1>
      <input
        value={input}
        type="text"
        placeholder="Enter Something"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>
      <Modal message={"Copied to Clipboard"} state={copied} />
    </div>
  );
};

export default CopyInput;
