import React from 'react'
import Home from './Home'
import { useRef } from 'react';
import {Route,Routes} from 'react-router-dom';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Actualrecipe from './Actualrecipe';
function Pages() {
  return (
    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cuisine/:type" element={<Cuisine/>}/>
        <Route path="/Searched/:item" element={<Searched/>}/>
        <Route path='/Actualrecipe/:name' element={<Actualrecipe/>}/>
    </Routes>
  )
}

export default Pages