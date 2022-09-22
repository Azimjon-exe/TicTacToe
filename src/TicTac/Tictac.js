import React, { useState } from "react";
import "./Tictac.css";

const Tictac = () => {
  const [turn, setturn] = useState("❌");
  const [cells, setcells] = useState(Array(9).fill(""));
  const [win, setWin] = useState();

  const chekForWiner = (squ) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [6, 7, 8],
      ],
      dialog: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squ[pattern[0]] === "" ||
          squ[pattern[1]] === "" ||
          squ[pattern[2]] === ""
        ) {
        } else if (
          squ[pattern[0]] === squ[pattern[1]] &&
          squ[pattern[1]] === squ[pattern[2]]
        ) {
          setWin(squ[pattern[0]]);
        }
      });
    }
  };
  const hendelClick = (num) => {
    if (cells[num] !== "") {
      alert("Tog'ri kirit!");
      return;
    }
    let squ = [...cells];
    if (turn === "❌") {
      squ[num] = "❌";
      setturn("🔵");
    } else {
      squ[num] = "🔵";
      setturn("❌");
    }
    chekForWiner(squ);
    setcells(squ);
  };

  const Cell = ({ num }) => {
    return (
      <td
        className={
          cells[num] === "🔵" ? "red" : cells[num] === "❌" ? "blue" : "gray"
        }
        onClick={() => {
          hendelClick(num);
        }}
      >
        {cells[num]}
      </td>
    );
  };
  const handelres = () => {
    setWin(null);
    setcells(Array(9).fill(""));
  };

  return (
    <div className="container">
      <table>
        <h3>Turn: {turn} ⏱</h3>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      <button
        className="btn"
        onClick={() => {
          handelres();
        }}
      >
        Play Again
      </button>
      {win && (
        <>
          <p>{win} Is the Winner!!</p>
        </>
      )}
    </div>
  );
};

export default Tictac;
