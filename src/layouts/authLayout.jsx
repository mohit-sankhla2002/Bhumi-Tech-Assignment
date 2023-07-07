import React from 'react'
import { Outlet } from 'react-router-dom';
function authLayout() {
  return (
    <div className='h-screen flex justify-center items-center'>
        <Outlet />
    </div>
  )
}

export default authLayout;