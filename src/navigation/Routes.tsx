import React from 'react'
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';


import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

 const RootRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes> 
    </BrowserRouter>
  )
}

export default RootRoutes