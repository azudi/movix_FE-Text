import React, {FC, useState} from 'react'
import { useContext, useEffect} from 'react';
//@ts-ignore
import AcerwareLogo from '../svg-widget/AcerwareLogo';
import { NavLink, useLocation } from "react-router-dom"

interface Props{
  name:string
}

const SideNav = (props : any) => {
  //-- inbuilt variables
  const location = useLocation();

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
    <>
    { props.showNav
     && 
     <div className='west-slide md:hidden fixed left-0 top-0 w-[325px] h-full bg-white px-6 py-10 z-20 overflow-y-auto overflow-x-hidden'>
       <div className=''>
          <div className='acearware-logo mb-4'>
             <NavLink to="/"><AcerwareLogo width='2200' height='55'/></NavLink>
          </div>

            <div className=''>
               {
                link.map((link, index)=>{
                  return (
                    <NavLink
                     key={index + link.link}
                     to={link.link}
                     className={`side-nav-link h-full w-full ${
                      location.pathname == link.link ? 'side-active-nav-link' : ''
                     }`}
                    >
                      {link.name}
                    </NavLink>
                    )
                })
               }
            </div>
       </div>
    </div> }
    </>
  )
}

export default SideNav