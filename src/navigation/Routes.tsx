import React from 'react'
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import UserDetails from '../pages/UserDetails';


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
          <Route path='/user-details' element={<UserDetails/>}/>
        </Routes> 
    </BrowserRouter>
  )
}

export default RootRoutes