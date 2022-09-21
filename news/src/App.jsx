import './App.css';

// import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { Routes, Route} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  
 
  
 
    return (
      <div>
       
        <NavBar/> 
  
        <Routes>
         
          <Route  path="/" element={<News />}></Route> 
          <Route  path="/:news" element={<News />}></Route> 
        
       
        </Routes>
      
      </div>
    )
 
}

export default App;