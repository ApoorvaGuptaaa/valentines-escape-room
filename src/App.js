import React, { useState } from "react";
import LockPuzzle from "./components/LockPuzzle";
import CardPuzzle from "./components/CardPuzzle";
import MirrorPuzzle from "./components/MirrorPuzzle";
import MagnetPuzzle from "./components/MagnetPuzzle";
import GameComplete from "./components/GameComplete";
import "./styles.css";

export default function App() {
  const [completed, setCompleted] = useState({
    lock: false,
    card: false,
    mirror: false,
    magnet: false,
  });

  const allCompleted = Object.values(completed).every(Boolean);

  return (
    <div className="room">
      <h1>💖 Valentine's Escape Room 💖</h1>
      <div className="puzzles">
        {!allCompleted ? (
          <>
            <LockPuzzle setCompleted={setCompleted} />
            <CardPuzzle setCompleted={setCompleted} />
            <MirrorPuzzle setCompleted={setCompleted} />
            <MagnetPuzzle setCompleted={setCompleted} />
          </>
        ) : (
          <GameComplete />
        )}
      </div>
    </div>
  );
}
