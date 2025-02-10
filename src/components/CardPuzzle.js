import React, { useState } from "react";

export default function CardPuzzle({ setCompleted }) {
  const [solved, setSolved] = useState(false);

  const solvePuzzle = () => {
    setSolved(true);
    alert("❤️ Hidden Message Found!");
    setCompleted(prev => ({ ...prev, card: true }));
  };

  return (
    <div className="puzzle">
      <h2>💌 Card Puzzle</h2>
      {!solved ? (
        <button onClick={solvePuzzle}>Flip Card</button>
      ) : (
        <p>💖 "You are my missing piece!" 💖</p>
      )}
    </div>
  );
}
