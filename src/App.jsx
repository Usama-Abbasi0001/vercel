import React from 'react'
import Homepage from './pages/public/Homepage';
import Login from './pages/public/Login';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/public/SignUp';
import APi from './components/HeroSec/APi';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
        <Route path='/demo' element={<APi/>}/>
  </Routes>
    </>
  )
}

export default App;