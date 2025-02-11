import React, { useState } from "react";

export default function LockPuzzle({ setCompleted }) {
  const [code, setCode] = useState("");

  const checkCode = () => {
    if (code === "2108") {
      alert("🔓 Lock Opened!");
      setCompleted(prev => ({ ...prev, lock: true })); // ✅ This now works!
    } else {
      alert("❌ Wrong Code!");
    }
  };

  return (
    <div className="puzzle">
      <h2>🔐 Lock Puzzle</h2>
      <h5>Hint- Special Day :3</h5>
      <input
        type="text"
        placeholder="Enter 4-digit code:"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={checkCode}>Unlock</button>
    </div>
  );
}
