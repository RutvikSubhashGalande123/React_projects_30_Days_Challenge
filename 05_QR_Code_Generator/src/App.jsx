import React, { useState } from "react";
import "./App.css";
import Qrcode from "qrcode.react";

function App() {
  const [text, setText] = useState("");
  const [generate, setGenerate] = useState(false);

  const handleClick = () => {
    setGenerate(!generate);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div>
        <input
        className="input"
          type="text"
          placeholder="Enter text"
          onChange={handleText}
          value={text}
          name="text" 
        />{" "}
      </div>
      <br />
      <div>
        <button onClick={handleClick}>Generate</button>
      </div>
      <br />
      <div>{generate && <Qrcode value={text} />}</div>
    </>
  );
}

export default App;
