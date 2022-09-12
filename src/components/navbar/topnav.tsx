import React, {FC, useState} from 'react'
import { useContext, useEffect} from 'react';
//@ts-ignore
import AcerwareLogo from '../svg-widget/AcerwareLogo';
import { NavLink, useLocation } from "react-router-dom"
import SideNav from './SideNav';


interface Props{
  name:string
}

const Topnav = () => {
  //-- inbuilt variables
  const location = useLocation();

  //custom variable
  const [nav, setNav] = useState(false)


 // Functions
 useEffect(()=>{
  let body = document.querySelector('body') as HTMLElement
  // body.onclick  = function(e){
  //     setNav(e.pageX > 325 && nav == true ? !false : nav)
  //  }
 },[])

  const toggleSideNav = () =>{
     setNav(!nav)
  }

   //variables
   const [link, setLink] = useState([
     {
      link: '/',
      name: 'Home'
     },{
      link: '/shop',
      name: 'Shop'
     },{
      link: '/about',
      name: 'About'
     },{
      link: '/categories',
      name: 'CATEGORIES'
     },{
      link: '/news',
      name: 'NEWS'
     },{
      link: '/contact-us',
      name: 'CONTACT US'
     },
    ])

  return (
    <div className='landing-container nav-bar-shadow fixed top-0 left-0 bg-white z-10'>
       <div className='nav-bar-container relative'>
          <div
          onClick={toggleSideNav}
          className='absolute right-4 inline-block cursor-pointer md:hidden'>
          <span className="material-symbols-outlined">arrow_back_ios</span>
          </div>
          <div className='acearware-logo'>
             <NavLink to="/"><AcerwareLogo width='2200' height='55'/></NavLink>
          </div>

            <div className='link-container'>
               {
                link.map((link, index)=>{
                  return (
                    <NavLink
                     key={index + link.link}
                     to={link.link}
                     className={`nav-link h-full ${
                      location.pathname == link.link ? 'active-nav-link' : ''
                     }`}
                    >
                      {link.name}
                    </NavLink>
                    )
                })
               }
            </div>
       </div>
       <SideNav showNav={nav}/>
    </div>
  )
}

export default Topnav