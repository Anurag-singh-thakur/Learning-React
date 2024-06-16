// App.js
import React from 'react';
import Navbar from './components/Navbar'; // Importing Navbar component
import './App.css';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
       {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar title='TextUtils' aboutText="About us"  />
      
      <div className="container"> 
      <TextForm heading="Enter the text to Analyse Below"/>
      </div>
    </>
  );
}

export default App;
