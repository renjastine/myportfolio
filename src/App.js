import Nav from "./component/Nav";
import Home from "./component/Home";
import "./css/style.css"
import "./css/font.css"
import "./css/animations.css"

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
