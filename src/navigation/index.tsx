import React from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import route from './router';

 const RootRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          {
            route.map((item) => {
              const {Page, route} = item
              return (
                <Route path={route} element={<Page/>} />
              )
            })
          } 
        </Routes> 
    </BrowserRouter>
  )
}

export default RootRoutes