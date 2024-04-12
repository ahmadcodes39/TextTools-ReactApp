import "./App.css";
import React, { useState } from "react";
import Alerts from "./Components/Alerts";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");

  const toggleStyle = () => {
    if (mode === "light") {
      setmode("Dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
      let form = document.querySelector("#form");
      form.style.backgroundColor = "#bcc0c0";

      showAlert("Dark mode has benn Enabled", "success");
    } else {
      setmode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
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
    <Router>
        <Navbar heading="TextTools" mode={mode} toggleStyle={toggleStyle} />
        <Alerts alert={alert} />
        <div className="container my-4">
          <Switch>
              <Route exact path="/about">
                <About />
              </Route>

              <Route exact path="/">
                <TextForm heading="Enter Text here to Analyze" showAlert={showAlert} mode={mode} toggleStyle={toggleStyle}/>
              </Route>
          </Switch>    
        </div>
    </Router>
  );
}

export default App;
