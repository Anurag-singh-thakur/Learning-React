

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";

function App() {
  let [mode , setMode] = useState('light');
  let toggleMode = ()=>
    {
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
      }
    }
  return (
    <>
    
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}  />

      <div className="container">
        <TextForm heading="Enter the text to Analyze Below" mode={mode}/>
      </div>

      <About />
    </>
  );
}

export default App;
