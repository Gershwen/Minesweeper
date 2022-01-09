import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

// When the user clicks on a bomb the below function should call revealing a gameover screen and "Try again" button
const Modal = ({ restartGame }) => {
  //the state of the Modal component is originally set to false.
  const [render, setRender] = useState(false);

  //making use of useEffect hook to call the function 1 second later to also reveal where all the bombs were
  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 1000);
  }, []);

  return (
    <div
      style={{
        opacity: render ? 1 : 0,
        height: "100%",
        width: "100%",
        position: "absolute",
        background: "black",
      }}
    >
      <div id="gameOverImage"></div>
      <Button className="btn-warning tryagain" onClick={restartGame}>
        Try Again
      </Button>
    </div>
  );
};

export default Modal;
