import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage/HomePage.jsx";
import { Route,Routes } from 'react-router-dom';
import StartTest from './components/StartTest/StartTest';
import Results from './components/results/Results';
import React, { useEffect, useState } from 'react'


function App() {

  const[addPoint,setAddPoint]=useState(0);

  return (
    <div className="App">
  
<Routes>
<Route path='/' element={<HomePage/>}></Route>
<Route path='/:level' element={<StartTest addPoint={addPoint} setAddPoint={setAddPoint} />} ></Route>
<Route path='/resulte' element={<Results addPoint={addPoint} setAddPoint={setAddPoint} />} ></Route>
</Routes>
    </div>
  );
}

export default App;
