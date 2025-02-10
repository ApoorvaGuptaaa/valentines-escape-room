import React, { useState } from "react";

export default function MagnetPuzzle({ setCompleted }) {
  const [keyRetrieved, setKeyRetrieved] = useState(false);

  return (
    <div className="puzzle">
      <h2>🧲 Magnet Puzzle</h2>
      {!keyRetrieved ? (
        <button onClick={() => {
          setKeyRetrieved(true);
          alert("🔑 You got the key!");
          setCompleted(prev => ({ ...prev, magnet: true }));
        }}>
          Use Magnet
        </button>
      ) : (
        <p>🔑 You have the key!</p>
      )}
    </div>
  );
}
