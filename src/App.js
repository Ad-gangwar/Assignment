import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from './Home';
import ShowDetails from './ShowDetails';

export default function App() {
  return (
    <div className='h-100 w-100'>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/showDetails/:showId' element={<ShowDetails/>}/>
     </Routes>
    </div>
  )
}
