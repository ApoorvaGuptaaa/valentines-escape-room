import React, { useState } from "react";
import LockPuzzle from "./LockPuzzle";
import CardPuzzle from "./CardPuzzle";
import MirrorPuzzle from "./MirrorPuzzle";
import MagnetPuzzle from "./MagnetPuzzle";
import GameCompleted from "./GameCompleted";
import "./room.css";

import lockImage from "./assets/lock.png";
import cardImage from "./assets/card.png";
import mirrorImage from "./assets/mirror.png";
import magnetImage from "./assets/magnet.png";
import keyImage from "./assets/key.png";

const GameContainer = () => {
  const [activePuzzle, setActivePuzzle] = useState(null);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [completedPuzzles, setCompletedPuzzles] = useState({
    lock: false,
    card: false,
    mirror: false,
    magnet: false,
  });

  const startPuzzle = (puzzle) => {
    if (
      (puzzle === 1) || 
      (puzzle === 2 && completedPuzzles.lock) || 
      (puzzle === 3 && completedPuzzles.card) || 
      (puzzle === 4 && completedPuzzles.mirror)
    ) {
      setActivePuzzle(puzzle);
    } else {
      alert("🔒 Solve the previous puzzle first!");
    }
  };

  const restartGame = () => {
    setGameCompleted(false);
    setCompletedPuzzles({
      lock: false,
      card: false,
      mirror: false,
      magnet: false,
    });
    setActivePuzzle(null);
  };

  if (gameCompleted) {
    return <GameCompleted restartGame={restartGame} />;
  }

  return (
    <div className="game-room">
      <h1>Try to Escape! 🔐💖</h1>

      <div className="room">
        {/* Lock Puzzle (Always visible, interactive first) */}
        <img
          src={lockImage}
          alt="Lock Puzzle"
          className={`puzzle-item lock ${completedPuzzles.lock ? "completed" : ""}`}
          onClick={() => startPuzzle(1)}
        />

        {/* Card Puzzle (Visible but only interactive after lock puzzle is done) */}
        <img
          src={cardImage}
          alt="Card Puzzle"
          className={`puzzle-item card ${completedPuzzles.lock ? "" : "disabled"}`}
          onClick={() => startPuzzle(2)}
        />

        {/* Mirror Puzzle (Visible but only interactive after card puzzle is done) */}
        <img
          src={mirrorImage}
          alt="Mirror Puzzle"
          className={`puzzle-item mirror ${completedPuzzles.card ? "" : "disabled"}`}
          onClick={() => startPuzzle(3)}
        />

        {/* Magnet Puzzle & Key (Visible but only interactive after mirror puzzle is done) */}
        <img
          src={magnetImage}
          alt="Magnet Puzzle"
          className={`puzzle-item magnet ${completedPuzzles.mirror ? "" : "disabled"}`}
          onClick={() => startPuzzle(4)}
        />
        <img
          src={keyImage}
          alt="Key"
          className="puzzle-item key"
        />
      </div>

      <div className="puzzle-container">
        {activePuzzle === 1 && <LockPuzzle setCompleted={setCompletedPuzzles} />}
        {activePuzzle === 2 && <CardPuzzle setCompleted={setCompletedPuzzles} />}
        {activePuzzle === 3 && <MirrorPuzzle setCompleted={setCompletedPuzzles} />}
        {activePuzzle === 4 && (
          <MagnetPuzzle setCompleted={setCompletedPuzzles} setGameCompleted={setGameCompleted} />
        )}
      </div>
    </div>
  );
};

export default GameContainer;
