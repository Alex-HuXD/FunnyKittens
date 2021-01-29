import React, { useState } from "react";
import "./tellme.css";
import { useSpeechSynthesis } from "react-speech-kit";

const TellMe = () => {
  const [text, setText] = useState("");
  const { speak } = useSpeechSynthesis();

  const onClick = () => {
    fetch(
      "https://v2.jokeapi.dev/joke/Dark,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist"
    )
      .then((res) => res.json())
      .then((data) => {
        data.type === "single"
          ? setText(`${data.joke}`)
          : setText(`${data.setup}${data.delivery}`);
      });
  };

  const tellMe = () => {
    speak({ text: text });
  };

  return (
    <div className=" tell-me tc dib br3 bg-light-green">
      <img
        className="dib f3"
        src="https://www.pinclipart.com/picdir/big/562-5622317_crystal-ball-emoji-png-emoji-crystal-ball-png.png"
        alt="ball"
        style={{ height: "200px", width: "auto", padding: "15px" }}
      />
      <div className="btn-container">
        <button className="shadow-5" onClick={onClick}>
          click me
        </button>
        <button onClick={tellMe}>Speak!!!</button>
      </div>
      <p>
        {text.includes("undefined")
          ? "Let me think.... Ahh, click again"
          : text}
      </p>
    </div>
  );
};

export default TellMe;
