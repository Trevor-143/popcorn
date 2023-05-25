import React from 'react'
import Home from './Home'
import Details from './Details'
import Genres from './Genres'
import Results from './Results'
import { Route, Routes } from 'react-router-dom'

function Pages() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/genre/:id' element={<Genres />} />
        <Route path='/results/:text' element={ <Results /> } />
    </Routes>
  )
}

export default Pages