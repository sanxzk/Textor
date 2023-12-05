import React, { useState } from "react";

export default function Textform(props) {
  // convert text to uppercase
  const handleUpclick = (event)=>{
    event.preventDefault();
    setText(text.toUpperCase())
  }

  const handleLowclick = (e)=>{
    e.preventDefault();
    setText(text.toLowerCase())
  }

  const handleClearclick = (e)=>{
    e.preventDefault();
    setText("")
  }

  const handleOnchange = (event)=>{
    // console.log("on change");
    setText(event.target.value);
    
  }
  const [text, setText] = useState("");
//   text = "new text";  wrong way to set the new text
    // setText("new text");  //correct way
  return (
    <>
    <div>
      <form>
        <h2>{props.heading}</h2>
        <div style={{margin:"2rem 0rem"}} className="form-group" >
          {/* <label for="mybox">Example textarea</label> */}
          <textarea className="form-control"  onChange = {handleOnchange} value = {text} placeholder="enter the text"  id="mybox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick= {handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick= {handleLowclick}>Convert to Lowercase</button>
        <button className= "btn btn-primary" onClick= {handleClearclick}>clear the text</button>
      </form>
    </div>
     
     <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.trim() === ""?0:text.trim().split(" ").length} words and {text.trim().length} characters</p>
      <p>{text.trim() === ""?0:0.88 * text.trim().split(" ").length} Minutes read</p>
      <h2>preview</h2>
      <p>{text}</p>
     </div>
</>
  );
}
