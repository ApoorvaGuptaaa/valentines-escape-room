import React, { useState } from "react";

export default function LockPuzzle({ setCompleted }) {
  const [code, setCode] = useState("");

  const checkCode = () => {
    if (code === "2108") {
      alert("🔓 Lock Opened!");
      setCompleted(prev => ({ ...prev, lock: true }));
    } else {
      alert("❌ Wrong Code!");
    }
  };

  return (
    <div className="puzzle">
      <h2>🔐 Lock Puzzle</h2>
      <input
        type="text"
        placeholder="Enter 4-digit code: Special Day :3"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={checkCode}>Unlock</button>
    </div>
  );
}
