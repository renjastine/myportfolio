import Projects from "./component/Projects";
import Contact from "./component/Contact";
import AboutMe from "./component/AboutMe";
import Skill from "./component/Skill";
import Home from "./component/Home";
import Nav from "./component/Nav";
import "./css/animations.css"
import "./css/style.css"
import "./css/font.css"

import { BrowserRouter } from "react-router-dom";
import "./css/responsive.css"


function App() {
  return (
    <div className="App d-flex-c">
      <BrowserRouter>
        <Nav />
        <Home />
        <AboutMe />
        <Skill />
        <Projects />
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
