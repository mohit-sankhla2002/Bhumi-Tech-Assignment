import React from 'react'
import Main from './pages/Main';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      
    </Routes> 
  )
}

export default App;