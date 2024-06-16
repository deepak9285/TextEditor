// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [mode, SetMode] = useState("light");
  const [text, SetText] = useState("Enable dark mode");
  const [alert, setAlert] = useState(null); //alert ki value set krne ke liye
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      SetMode("light");
      document.body.style.backgroundColor = "white";
      SetText("Enable dark mode");
      showAlert("Light Mode has been enabled", "success");
      document.title = "Text utils -Dark mode";
    } else {
      SetMode("dark");
      document.body.style.backgroundColor = "gray";
      SetText("Disable dark mode");
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text utils-Light mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          Title="TextUtils"
          About="AboutTextUtils"
          mode={mode}
          text={text}
          toggleMode={toggleMode}
        />
        <Alert Alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Analyze the text"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
