import React, { useRef } from "react";

function FormsMarks() {
  let englishInputRef = useRef();
  let teluguInputRef = useRef();
  let hindiInputRef = useRef();
  let mathsInputRef = useRef();
  let scienceInputRef = useRef();
  let socialInputRef = useRef();
  return (
    <div>
      <h1>Student Marks Form</h1>
      <hr></hr>
      <form>
        <fieldset>
          <legend>Please enter your personal details</legend>
        </fieldset>
        <fieldset>
          <div>
            <label>First Name</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Last Name</label>
            <input type="text"></input>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label>English Marks</label>
            <input type="number" ref={englishInputRef}></input>
          </div>
          <div>
            <label>Telugu Marks</label>
            <input type="number" ref={teluguInputRef}></input>
          </div>
          <div>
            <label>Hindi Marks</label>
            <input type="number" ref={hindiInputRef}></input>
          </div>
          <div>
            <label>Maths Marks</label>
            <input type="number" ref={mathsInputRef}></input>
          </div>
          <div>
            <label>Science Marks</label>
            <input type="number" ref={scienceInputRef}></input>
          </div>
          <div>
            <label>Social Marks</label>
            <input type="number" ref={socialInputRef}></input>
          </div>
        </fieldset>
        <div>
          <button
            type="button"
            onClick={() => {
              let englishMarks = Number(englishInputRef.current.value);
              let teluguMarks = Number(englishInputRef.current.value);
              let hindiMarks = Number(englishInputRef.current.value);
              let mathsMarks = Number(englishInputRef.current.value);
              let scienceMarks = Number(englishInputRef.current.value);
              let socialMarks = Number(englishInputRef.current.value);

              let totalMarks =englishMarks +teluguMarks +hindiMarks +mathsMarks +scienceMarks +socialMarks;

              englishInputRef.current.value = 90;
              englishInputRef.current.style.backgroundColor = "red";
              teluguInputRef.current.value = 80;
              teluguInputRef.current.style.backgroundColor = "green";
              hindiInputRef.current.value = 90;
              hindiInputRef.current.style.backgroundColor = "pink";
              mathsInputRef.current.value = 80;
              mathsInputRef.current.style.backgroundColor = "brown";
              scienceInputRef.current.value = 70;
              scienceInputRef.current.style.backgroundColor = "orange";
              socialInputRef.current.value = 80;
              socialInputRef.current.style.backgroundColor = "yellow";

              alert(`Total marks are ${totalMarks}`);
              console.log("Hello");
            }}>Calculate</button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              let a = 50;
              console.log(a);
            }}>Variables</button>
        </div>
      </form>
    </div>
  );
}

export default FormsMarks;
