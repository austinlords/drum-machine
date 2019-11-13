import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  const drumPads = [
    {
      text: "Q",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      keycode: "KeyQ",
      description: "Heater 1"
    },
    {
      text: "W",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      keycode: "KeyW",
      description: "Heater 2"
    },
    {
      text: "E",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      keycode: "KeyE",
      description: "Heater 3"
    },
    {
      text: "A",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      keycode: "KeyA",
      description: "Heater 4"
    },
    {
      text: "S",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      keycode: "KeyS",
      description: "Heater 6"
    },
    {
      text: "D",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      keycode: "KeyD",
      description: "Disco"
    },
    {
      text: "Z",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      keycode: "KeyZ",
      description: "Kickin' 1"
    },
    {
      text: "X",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      keycode: "KeyX",
      description: "Kickin' 2"
    },
    {
      text: "C",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      keycode: "KeyC",
      description: "Chevy"
    }
  ];

  let [lastPlayed, setLastPlayed] = useState("");

  function playAndUpdate(event) {
    let drum = document.getElementById(event.code[3]);
    drum.play();
    setLastPlayed(drum.getAttribute("data"));
  }

  useEffect(() => {
    document.addEventListener("keydown", function handleKeyPress(event) {
      if (
        event.code === "KeyQ" ||
        event.code === "KeyW" ||
        event.code === "KeyE" ||
        event.code === "KeyA" ||
        event.code === "KeyS" ||
        event.code === "KeyD" ||
        event.code === "KeyZ" ||
        event.code === "KeyX" ||
        event.code === "KeyC"
      )
        playAndUpdate(event);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 style={{ textAlign: "center", marginTop: "10px" }}>
            FCC: Drum Machine
          </h3>
          <hr />

          <div id="drum-machine" className="row">
            <div id="drum-buttons" className="col-6">
              {drumPads.map(drum => (
                <div
                  id={drum.description}
                  className="drum-pad clickable grow-hover"
                  onClick={() => {
                    document.getElementById(drum.text).play();
                    setLastPlayed(drum.description);
                  }}
                  key={drum.keycode}
                >
                  <audio
                    className="clip"
                    id={drum.text}
                    src={drum.audio}
                    data={drum.description}
                  />
                  {drum.text}
                </div>
              ))}
            </div>
            <div id="display" className="col-6 my-3">
              <p style={{ textAlign: "center", fontStyle: "italic" }}>
                LAST SOUND
              </p>
              <hr />
              <div
                style={{
                  width: "100%",
                  height: "60px",
                  background: "darkblue",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px"
                }}
              >
                {lastPlayed}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
