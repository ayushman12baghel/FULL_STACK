import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

  let updateBlue = () => {
    setMoves((prevMoves) => {
      return { ...moves, blue: moves.blue + 1 };
    });
  };
  let updateYellow = () => {
    setMoves((prevMoves) => {
      return { ...moves, yellow: moves.yellow + 1 };
    });
  };
  let updateGreen = () => {
    setMoves((prevMoves) => {
      return { ...moves, green: moves.green + 1 };
    });
  };
  let updateRed = () => {
    setMoves((prevMoves) => {
      return { ...moves, red: moves.red + 1 };
    });
  };
  return (
    <div>
      <p>Game begins</p>
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button onClick={updateBlue} style={{ backgroundColor: "blue" }}>
          +1
        </button>
        <p>Yellow moves = {moves.yellow}</p>
        <button
          onClick={updateYellow}
          style={{ backgroundColor: "yellow", color: "black" }}
        >
          +1
        </button>
        <p>Green moves = {moves.green}</p>
        <button onClick={updateGreen} style={{ backgroundColor: "green" }}>
          +1
        </button>
        <p>Red moves = {moves.red}</p>
        <button onClick={updateRed} style={{ backgroundColor: "red" }}>
          +1
        </button>
      </div>
    </div>
  );
}
