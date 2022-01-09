import React, { useState, useEffect } from "react";
import createBoard from "../util/createBoard";
import { revealed } from "../util/reveal";
import Cell from "./Cell";
import Modal from "./Modal";
import HelpBtn from "./HelpBtn";

// Below component holds all the cells/blocks for the user to click on
const Board = () => {
  //Starting the grid off with an empty array
  const [grid, setGrid] = useState([]);
  //setting the initial state of non mine blocks
  const [nonMineCount, setNonMineCount] = useState(0);
  const [mineLocations, setMineLocations] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  //making use of the useEffect hook to perform the behaviour of componentDidMount
  useEffect(() => {
    freshBoard();
  }, []);

  //Below function will call the createBoard function and you can set the amount of rows and columns desired to increase difficulty
  function freshBoard() {
    const newBoard = createBoard(10, 10, 15);

    setNonMineCount(10 * 10 - 15);
    setMineLocations(newBoard.mineLocation);
    //we add the board to the array by calling setGrid and updating the state
    setGrid(newBoard.board);
  }

  //restartGame function calls the freshBoard function to start the game over and then calls the
  //setGameOver function to false to indicate its a new game.
  const restartGame = () => {
    freshBoard();
    setGameOver(false);
  };

  //Below function calls on right click when the user wants to flag a cell
  const updateFlag = (e, x, y) => {
    //e.preventDefault() ensures that when you right click on the cells that the menu does not pop up.
    e.preventDefault();
    //setting state to newGrid
    let newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[x][y].flagged = true;
    setGrid(newGrid);
  };

  //Reveal cell function should call when the user left clicks on a block
  const revealCell = (x, y) => {
    //Below statement checks if the user has already revealed a cell and returns nothing. This was to prevent an error
    if (grid[x][y].revealed || gameOver) {
      return;
    }

    let newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[x][y].value === "X") {
      for (let i = 0; i < mineLocations.length; i++) {
        newGrid[mineLocations[i][0]][mineLocations[i][1]].revealed = true;
      }
      //After running the for loop to reveal all the mines we refesh the grid
      setGrid(newGrid);
      setGameOver(true);
    } else {
      let newRevealedBoard = revealed(newGrid, x, y, nonMineCount);
      setGrid(newRevealedBoard.arr);
      setNonMineCount(newRevealedBoard.newNonMinesCount);
    }
  };

  //we return the board only from the grid object using map method
  return (
    <div>
      <HelpBtn />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {gameOver && <Modal restartGame={restartGame} />}
        {grid.map((singleRow, index1) => {
          return (
            <div style={{ display: "flex" }} key={index1}>
              {singleRow.map((singleBlock, index2) => {
                return (
                  <Cell
                    revealCell={revealCell}
                    details={singleBlock}
                    updateFlag={updateFlag}
                    key={index2}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
