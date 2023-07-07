import React from 'react'
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/authLayout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route element={<Layout />}>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes> 
  )
}

export default App;