import React from "react";

export default function GameCompleted({ restartGame }) {
  return (
    <div className="game-completed">
      <h1>🎉 Congratulations! 🎉</h1>
      <p>You've successfully completed the Valentine's Escape Room! 💖</p>
      <button onClick={restartGame}>Play Again</button>
    </div>
  );
}
