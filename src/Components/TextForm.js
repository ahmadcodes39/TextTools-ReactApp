import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const UpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Text Converted to Upper case","success")
  };
  const LowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Text Converted to Lower case","success")

  };
  const WideSpaces = () => {
    let newText = text.trim();
    setText(newText);
    props.showAlert(" Wide Spaces are removed","success")

  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(" Text Copied to Clipbord! ","success")

  };
  const ExtraSpaces = () => {
    let newText = text.split(' ').filter(Boolean).join(' ');
    setText(newText);
    props.showAlert(" All Extra Spaces are removed","success")

  };
  // const WordCounter = () => {
  //   let newText = text.split(" ").filter(Boolean).length;
  //   alert("word counts: "+newText);
  // };
  const OpenFields = (type) => {
    let Replacment_Fields = document.querySelector(".Replacment_Fields")
    let CountSpecific = document.querySelector(".CountSpecific")
    if (type==="replace") { 
      Replacment_Fields.style.display = "flex"
      CountSpecific.style.display = "none"

    }
    else if (type==="count") { 
      CountSpecific.style.display = "flex"
      Replacment_Fields.style.display = "none"

    }
  };
  const replaceWords = () => {
    let Replacment_Fields = document.querySelector(".Replacment_Fields");
    let oldwordInput = document.querySelector("#OldWord");
    let newwordInput = document.querySelector("#NewWord");
    let oldword = oldwordInput.value;
    let newword = newwordInput.value;
    let newText = text.split(oldword).join(newword);
    setText(newText);
    props.showAlert(" The word '" + oldword + "'is replaced with '" + newword +"'" ,"success")
    Replacment_Fields.style.display = "none";
    oldwordInput.value = "";
    newwordInput.value = "";
};
const ReverseText=()=>{
   let newtext = text.split("").reverse().join("")
   setText(newtext)
   props.showAlert(" All Text has been reversed","success")

}
const clearText=()=>{
   let newText = " "
   setText(newText)
   props.showAlert(" Text field is cleared","success")

}

const CountSpecificWord=()=>{
     let CountSpecific = document.querySelector(".CountSpecific")
     CountSpecific.style.display = "none"
     let itemcountWord = document.querySelector("#countWord")
     let countWord = itemcountWord.value.toLowerCase()
     let counter=0
   for (let word of text.split(" ")) {
     if (word.toLowerCase()===countWord) {
       counter++
     }
   }
   props.showAlert(" The word '" + countWord + "' appears " + counter + " times.","success")
   itemcountWord.value=""

}


  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="form-group my-3">
          <label htmlFor="exampleFormControlTextarea1">
            <h2>{props.heading}</h2>
          </label>
          <textarea
            className="form-control"
            id="form"
            rows="12"
            cols="40"
            value={text}
            onChange={handleOnChange}
            autoFocus
          ></textarea>
      </div>

      <button type="button" className="btn btn-outline-primary margin" onClick={UpperCase}>
        Convert to Upper Case
      </button>
      <button type="button" className="btn btn-outline-secondary mx-2" onClick={LowerCase}>
        Convert to Lower Case
      </button>
      <button type="button" className="btn btn-outline-info mx-2" onClick={WideSpaces}>
        Remove Wide Spaces
      </button>
      <button type="button" className="btn btn-outline-warning mx-2" onClick={ExtraSpaces}>
        Remove Extra Spaces
      </button>
      <button type="button" className="btn btn-outline-success mx-2" onClick={copyText}>
        Copy text
      </button>
      <button type="button" className="btn btn-outline-danger mx-2" onClick={() => OpenFields("replace")} >
        Replace Word
      </button>
  <div className="flex my-4">
            <button type="button" className="btn btn-outline-danger mx-2 my-1" onClick={ReverseText} >
              Reverse Entire Text
            </button>
            <button type="button" className="btn btn-outline-secondary mx-2 my-1" onClick={clearText} >
              Clear All Text
            </button>
            <button type="button" className="btn btn-outline-success mx-2 my-1" onClick={() => OpenFields("count")} >
              Count Specific Word
           </button>
          
   </div>

  <div className="container my-4 Replacment_Fields">
      <input type="text" name="word" id="OldWord"className="inputField" placeholder="Enter Word to replace" autoFocus/>
      <input type="text" name="word" id="NewWord" className="inputField" placeholder="Enter Replacment Word"/>
      <button type="button" className="mx-15 btn btn-secondary submitBtn" onClick={replaceWords}>OK</button>
  </div>

  <div className="CountSpecific">
      <input autoFocus type="text" name="word" id="countWord"className="inputField" placeholder="Enter Word to count" />
      <button type="button" className="mx-15 btn btn-secondary submitBtn" id="Done" onClick={CountSpecificWord}>OK</button>
  </div>
  
 
    <h2>Text Summary</h2>
      <div className="TotalWords container my-3">
          <p className="CurrentWord"><strong>Total Words</strong></p>
          <p><strong>{text.split(" ").filter(Boolean).length}</strong></p>
      </div>
      <div className="TotalWords container my-3">
          <p className="CurrentWord CurrentCharacters"><strong>Total Characters</strong></p>
          <p><strong>{text.split("").length}</strong></p>
      </div>

      <div className="Preview">
        <h3>Preview</h3>
        
        {text}
      </div>
    </>
  );
}
