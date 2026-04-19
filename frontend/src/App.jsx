import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {LoginPage, SignupPage, ActivationPage, HomePage} from "./Routes.jsx"
import { toast, ToastContainer, Bounce } from 'react-toastify';
import { useEffect } from 'react';
import axios from 'axios';
import store from '../redux/store.js';
import { loadUser } from '../redux/actions/user.js';


export default function App () {
  useEffect(() => {
   store.dispatch(loadUser())
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/sign-up' element={<SignupPage/>} />
        <Route path='/activation/:activation_token' element={<ActivationPage/>} />
      </Routes>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
          />
    </BrowserRouter>
    
  )
}

