import React from "react";

export default function Cell({ details, updateFlag, revealCell }) {
  return (
    //when the user uses right click onContextMenu should fire and call the function thats passed from Board.js
    <div
      onContextMenu={(e) => updateFlag(e, details.x, details.y)}
      onClick={() => revealCell(details.x, details.y)}
      className="cellStyle"
    >
      {!details.revealed && details.flagged ? (
        <i style={{ color: "red" }} className="fas fa-flag"></i>
      ) : details.revealed && details.value !== 0 ? (
        details.value === "X" ? (
          <i className="fas fa-bomb"></i>
        ) : (
          details.value
        )
      ) : (
        ""
      )}
    </div>
  );
}
