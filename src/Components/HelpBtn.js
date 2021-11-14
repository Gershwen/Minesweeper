import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

//Below component renderd a dropdown which will act as the help button to display instructions for the game
const HelpBtn = () => {
  return (
    <Dropdown className="helpButton">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Help
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <ul>
          <li>
            "In order to win the game, you must reveal all the squares that DO
            NOT contain a mine, whether you flag them or not is a matter of
            personal preference. If a mine is revealed, the player loses."
          </li>
          <li>
            "The number displayed in each square represents how many mines are
            adjacent to that square."
          </li>
          <li>
            "Flag the mine so you remember where it is and don't click it by
            accident." - Flag a square by right clicking on it.
          </li>
          <li>
            "Once all the specified number of adjacent mines are flagged, you
            are free to click the remaining adjacent squares surrounding the
            numbered square."
          </li>
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default HelpBtn;

// Credit
//Got rules of game from https://guides.brit.co/guides/play-minesweeper/particle-3
