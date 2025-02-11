import React, { useState } from "react";

export default function MagnetPuzzle({ setCompleted, setGameCompleted }) {
  const [keyRetrieved, setKeyRetrieved] = useState(false);

  return (
    <div className="puzzle">
      <h2>🧲 Magnet Puzzle</h2>
      {!keyRetrieved ? (
        <button onClick={() => {
          setKeyRetrieved(true);
          alert("🔑 You got the key!");
          setCompleted(prev => ({ ...prev, magnet: true }));

          // ✅ End the game when the last puzzle is solved
          setTimeout(() => {
            setGameCompleted(true);
          }, 1000);
        }}>
          Use Magnet
        </button>
      ) : (
        <p>🔑 You have the key!</p>
      )}
    </div>
  );
}
