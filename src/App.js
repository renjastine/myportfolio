import PhoneNav from "./component/PhoneNav";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import AboutMe from "./component/AboutMe";
import Skill from "./component/Skill";
import Home from "./component/Home";
import Nav from "./component/Nav";

import ViewModal from "./modal/ViewModal";

import "./css/animations.css"
import "./css/style.css"
import "./css/font.css"


import { BrowserRouter } from "react-router-dom";
import "./css/responsive.css"
import { useState } from "react";


function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const [form, setForm] = useState("burger")

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth)
    if (width >= 515) setForm("burger")
  })

  return (
    <div className="App d-flex-c" id='home'>
      <BrowserRouter>
        <Nav width={width} form={form} setForm={setForm} />
        <PhoneNav form={form} />
        <Home width={width} />
        <AboutMe />
        <Skill />
        <Projects />
        <Contact />
        {/* <ViewModal /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
