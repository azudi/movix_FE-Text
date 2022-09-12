import React from 'react'
import LandingPage from '../../pages/LandingPage';
import About from '../../pages/About';
import Categories from '../../pages/Categories';
import News from '../../pages/News';
import Shop from '../../pages/Shop';
import ContactUs from '../../pages/ContactUs';


import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

 const RootRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        </Routes> 
    </BrowserRouter>
  )
}

export default RootRoutes