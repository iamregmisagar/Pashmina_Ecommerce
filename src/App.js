import Home from "./Pages/Home";
import About from "./Pages/About";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Contact from "./Pages/Contact";
import React, {useState} from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


export default function App() {
  const [darkMode, setDarkMode]=useState(false);
  const toggle=()=>{
    setDarkMode(!darkMode);
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home mode={{
          darkMode:darkMode,
          changeMode:toggle
        }}/>} />
        <Route exact path="/about" element={<About mode={{
          darkMode:darkMode,
          changeMode:toggle
        }}/>} />
        <Route exact path="/signin" element={<SignIn mode={{
          darkMode:darkMode,
          changeMode:toggle
        }}/>} />
        <Route exact path="/signup" element={<SignUp mode={{
          darkMode:darkMode,
          changeMode:toggle
        }}/>} />
        <Route exact path="/contact" element={<Contact mode={{
          darkMode:darkMode,
          changeMode:toggle
        }}/>} />
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}

