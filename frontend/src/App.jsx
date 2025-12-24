import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../src/pages/Login.jsx'

export default function App () {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

