import React, { useState } from "react";
import Header from "./header";
import TextForm from "./Textform";
import About from "./About";
import Alert from "./Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundImage =
        "linear-gradient(to right top, #0a245f, #263071, #3d3d84, #534a96, #6958a9, #6c56a9, #6e54a8, #7152a8, #613f95, #502d82, #401a6f, #30055d)";
      defineAlert("Dark Mode Activated", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      defineAlert("Light Mode Activated", "success");
    }
  };

  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  const defineAlert = (message, type) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert({
        type: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <>
      <Router>
        <Header
          title="Suuuuuuiiiiiiiiiii"
          about="About Us"
          currentMode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/about"
            element={<About currentMode={mode} toggleMode={toggleMode} />}
          />

          <Route
            path="/"
            element={
              <TextForm
                heading="Enter Some Text Below To Analyze"
                currentMode={mode}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
