import React, { useState } from "react";

export default function MirrorPuzzle({ setCompleted }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="puzzle">
      <h2>🪞 Mirror Puzzle</h2>
      <button onClick={() => {
        setRevealed(true);
        alert("🔮 'LOVE' is the key! 🔮");
        setCompleted(prev => ({ ...prev, mirror: true })); // ✅ Corrected
      }}>
        Use Mirror
      </button>
      {revealed && <p>🔮 "LOVE" is the key! 🔮</p>}
    </div>
  );
}
