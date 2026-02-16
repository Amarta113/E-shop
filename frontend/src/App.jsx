import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {LoginPage, SignupPage, ActivationPage} from "./Routes.jsx"
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function App () {
  useEffect(() => {
    axios.get(`${API_BASE_URL}/user/get-user`, {withCredentials: true})
    .then((res) => {
      toast.success(res.data.message)
    })
    .catch((err) => {
      toast.error(err.response.data.message);
    })
  }, [])
  return (
    <BrowserRouter>
      <Routes>
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

