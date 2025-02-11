import React, { useState } from "react";

export default function CardPuzzle({ setCompleted }) {
  const [solved, setSolved] = useState(false);

  const solvePuzzle = () => {
    setSolved(true);
    alert("❤️ Hidden Message Found!");
    setCompleted(prev => ({ ...prev, card: true })); // ✅ Corrected
  };

  return (
    <div className="puzzle">
      <h2>💌 Card Puzzle</h2>
      {!solved ? (
        <button onClick={solvePuzzle}>Flip Card</button>
      ) : (
        <p>Dear Zeekie, Happy Valentines Day!! This is the second year we're celebrating Valentines together. I'm glad that we've been so happy, and have always talked through things. We've never fought, but I do hope we get into some fights at least so it could challenge us and our notions if there's ever a difference and we'd be better for it. I love you always, and I hope to be there for you forever. Yours, Aps *^____^*</p>
      )}
    </div>
  );
}
