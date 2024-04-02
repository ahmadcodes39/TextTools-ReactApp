import "./App.css";
import Alerts from "./Components/Alerts";
import Navbar from "./Components/Navbar";
import React, { useState } from "react";
import TextForm from "./Components/TextForm";

function App() {
  const [mode, setmode] = useState("light");

  const toggleStyle = () => {
    if (mode === "light") {
      setmode("Dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
      // let navbar = document.querySelector(".navbar");
      // navbar.style.backgroundColor = "grey";
      let form = document.querySelector("#form");
      form.style.backgroundColor = "#bcc0c0";

      showAlert("Dark mode has benn Enabled", "success");
    } else {
      setmode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      // let navbar = document.querySelector(".navbar");
      // navbar.style.backgroundColor = "#9aabbd";
      let form = document.querySelector("#form");
      form.style.backgroundColor = "white";

      showAlert("light mode has benn Enabled", "success");
    }
  };
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  return (
    <>
      <Navbar heading="TextTools" mode={mode} toggleStyle={toggleStyle} />
      <Alerts alert={alert} />
      <div className="container my-4">
        <TextForm
          heading="Enter Text here to Analyze"
          showAlert={showAlert}
          mode={mode}
          toggleStyle={toggleStyle}
        />
      </div>
    </>
  );
}

export default App;
