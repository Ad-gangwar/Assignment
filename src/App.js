import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from './Home';

export default function App() {
  return (
    <div className='vh-100 vw-100'>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
    </div>
  )
}
