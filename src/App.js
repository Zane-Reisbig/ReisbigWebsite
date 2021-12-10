import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App(props) {
  const [r, handleR] = useState(255);
  const [g, handleG] = useState(255);
  const [b, handleB] = useState(255);

  const handleChangeR = (e) => {
    handleR(e.target.value);
    changeColor();
  };
  const handleChangeG = (e) => {
    handleG(e.target.value);
    changeColor();
  };
  const handleChangeB = (e) => {
    handleB(e.target.value);
    changeColor();
  };

  function handleResetClick() {
    handleR(255);
    handleG(255);
    handleB(255);
    changeColor(true);
  }

  function changeColor(changeIt) {
      if (!changeIt) {
        document.getElementById("rgb-player").style.backgroundColor = `rgb(${r},${g},${b})`;
      }
      else{
        document.getElementById("rgb-player").style.backgroundColor = `rgb(255,255,255)`;
      }
  }

  function copyValues() {
    const copyText = `rgb(${r}, ${g}, ${b})`;
    navigator.clipboard.writeText(copyText);
  }

  return (
      <div>
          <Navbar title="Home"/>
          <p>
              Welcome to my website! <br />
              I make a lot of stuff for a lot of people. <br />
              I want a place to put all my projects and stuff. <br />
              I want it to be easy to find my stuff and to use it. <br />
              I plan on making most of my stuff in JavaScript from now on. <br />
              No more making tiny python scripts that people will only use once. <br />
              The only bad part is trying to upload all the stuff I have made in VBA. <br />
              I've made some really cool stuff in VBA, but I can't upload it. {":("}<br /> 
              Good luck with the navigation! <br />
              I tried to make it not terrible lol. <br />
          </p>

          <div className="m-3 p-2 rounded-xl border-2 border-black " id={"rgb-player"} >
            <div className="">
                <div className=" inline-block text-center border-2 border-black mt-2 rounded-xl bg-white pr-1 ">
                    <p>{"<"}R{">"}</p>
                    <input type="range" value={r} onChange={handleChangeR} max="255" min="0" className={" w-32 ml-2 mr-2 "}/>
                    <input disabled type="number" value={r} className={"w-14 transform -translate-y-1"} id="r-input"></input>
                </div>
            </div>
            <div className="">
                <div className=" inline-block text-center border-2 border-black mt-2 rounded-xl bg-white pr-1 ">
                    <p>{"<"}G{">"}</p>
                    <input type="range" value={g} onChange={handleChangeG} max="255" min="0" className={" w-32 ml-2 mr-2"}/>
                    <input disabled type="number" value={g} className={"w-14 transform -translate-y-1"} id="g-input"></input>
                </div>
            </div>
            <div className="">
                <div className=" inline-block text-center border-2 border-black mt-2 rounded-xl bg-white pr-1 ">
                    <p>{"<"}B{">"}</p>
                    <input type="range" value={b} onChange={handleChangeB} max="255" min="0" className={" w-32 ml-2 mr-2"}/>
                    <input disabled type="number" value={b} className={"w-14 transform -translate-y-1"} id="b-input"></input>
                </div>
            </div>
            <div className="border-2 border-black rounded-xl inline-block pr-3 pl-2 bg-white mt-1">
                <button className="ml-128" onClick={handleResetClick}>Reset</button>
            </div>
            <div className="border-2 border-black rounded-xl inline-block pr-3 pl-2 mx-1 bg-white mt-1">
                <button className="ml-128" onClick={copyValues}>Copy Values</button>
            </div>
          </div>

          <Footer />
      </div>
    );
  }