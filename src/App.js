import AboutMe from "./component/AboutMe";
import Home from "./component/Home";
import Nav from "./component/Nav";
import "./css/animations.css"
import "./css/style.css"
import "./css/font.css"

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Home />
        <AboutMe />
      </BrowserRouter>
    </div>
  );
}

export default App;
