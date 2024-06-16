import React, { useState } from "react"; //rfc
export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upperCase", "success");
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value); //iska mtlb ye h ki jab ham kuch keyboard se press krenge to onChange function sun ho ga aur jo value hogi wo hamare to text ke equal ho jayegi aur text likh jayega
  };
  const handleCopy = () => {
    //to copy the message to clip boards

    navigator.clipboard.writeText(text);

    props.showAlert("Message copied", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra spaces", "success");
  };
  const reset = () => setText("");

  const [text, setText] = useState(""); //learn this syntax//
  //text="new text"// wrong way to update the text
  //setText("new Text");//correct way to update the text
  return (
    <>
      <div
        className="container m-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
          <textarea
            className="form-control"
            id="myBox"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
          <button className="btn btn-primary mt-3 " onClick={handleUpClick}>
            Convert to Upper case
          </button>
          <button
            className="btn btn-primary  mt-3 mx-2"
            onClick={handleDownClick}
          >
            Convert to Lower case
          </button>
          <button className="btn btn-primary  mt-3 mx-2" onClick={reset}>
            Clear text
          </button>
          <button className="btn btn-primary  mt-3 mx-2" onClick={handleCopy}>
            Click to copy the text
          </button>
          <button
            className="btn btn-primary  mt-3 mx-2"
            onClick={handleExtraSpaces}
          >
            Remove extra spaces
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text Summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          and{text.length} characters
        </p>
        {/* filter method ham words ki length ko thik krne ke liye likhe h nhi to koi bhi word nhi hota phir bhi 1 count hota  h */}
        <p>{0.008 * text.split(" ").length}minutes</p>
        <h1>Preview</h1>
        <p id="previewText">
          {text.length > 0 ? text : "Enter your text to preview it here"}
        </p>
      </div>
    </>
  );
}
