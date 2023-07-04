import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  function handleUpperClick() {
    const upperCaseText = text.toUpperCase();
    setText(upperCaseText);
  }
  function handleLowerClick() {
    const lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
  }

  function handleChange(event) {
    const textTyped = event.target.value;
    setText(textTyped);
  }
  function handleCopy() {
    const newtext = document.getElementById("myBox");
    // newtext.focus();
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
  }

  // Credits: Coding Wala
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div className="container" style={{color:props.currentMode==='light'?'black':'white'}}>
        <h3>{props.heading}</h3>
        <div class="mb-3">
          <textarea
            value={text}
            class="form-control"
            onChange={handleChange}
            rows="8"
            id="myBox"
            placeholder="Enter text here"
            style={{backgroundColor:props.currentMode==='dark'? '#042743':'white',color:props.currentMode==='light'?'black':'white',border:props.currentMode==='light'?'1px solid black':'none'}}
          ></textarea>
        </div>

        <button
          className="btn btn-dark my-2 mx-2"
          onClick={handleUpperClick}
        >
          Convert To Upper Case
        </button>

        <button
          className="btn btn-dark my-2 mx-2"
          onClick={handleLowerClick}
        >
          Convert To Lower Case
        </button>

        <button className="btn btn-dark my-2 mx-2" onClick={handleCopy}>
          Copy Text
        </button>

        <button
          className="btn btn-dark my-2 mx-2"
          onClick={handleExtraSpaces}
        >
          Clear Extra Spaces
        </button>

      </div>

      <div className="container" style={{color:props.currentMode==='light'?'black':'white'}}>
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p className="container">{text}</p>
      </div>
    </>
  );
}

export default TextForm;
