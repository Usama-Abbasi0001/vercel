import React from 'react'
import Homepage from './pages/public/Homepage';
import Login from './pages/public/Login';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/public/SignUp';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
  </Routes>
    </>
  )
}

export default App;