
import React, { Component } from 'react'
import BriefcaseIcon from '../svg-icon/BriefcaseIcon'
import HomeIcon from '../svg-icon/HomeIcon'
import UserIcon from '../svg-icon/UserIcon'
import GaurantorIcon from '../svg-icon/GaurantorIcon'
import LoanIcon from '../svg-icon/LoanIcon'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DecisionIcon from '../svg-icon/DecisionIcon'
import SavingsIcon from '../svg-icon/SavingsIcon'
import LoanRequesticon from '../svg-icon/LoanRequesticon'
import WhitelistIcon from '../svg-icon/WhitelistIcon'
import UserICrossIcon from '../svg-icon/UserICrossIcon'

interface Props {}

function SideNav(props: Props) {
  const {} = props

  //Variables
  const [iconWidth, setWidthIcon] = useState(16)
  const [routes, setRoutes] = useState([
      {
        name:'Users',
        route: '/users',
        Element: <UserIcon width={iconWidth}/>
      },
      {
        name:'Gaurantor',
        route: '/gaurantor',
        Element: <GaurantorIcon width={iconWidth}/>
      },
      {
        name:'Loan',
        route: '/loan',
        Element: <LoanIcon width={iconWidth}/>
      },
      {
        name:'Decision Models',
        route: '/Decision-Models',
        Element: <DecisionIcon width={iconWidth}/>
      },
      {
        name:'Savings',
        route: '/savings',
        Element: <SavingsIcon width={iconWidth}/>
      },
      {
        name:'Loan-request',
        route: '/loan-request',
        Element: <LoanRequesticon width={iconWidth}/>
      },
      {
        name:'Whitelist',
        route: '/whitelist',
        Element: <WhitelistIcon width={iconWidth}/>
      },
      {
        name:'Karmar',
        route: '/karmar',
        Element: <UserICrossIcon width={iconWidth}/>
      },
    
  ])

  return (
    <div className='w-full side-nav-container'>
       <div className='text-[13px] flex items-center py-6  pl-8'>
         <BriefcaseIcon width="15"/>
         <span className='ml-2'>Switch Organization</span>
       </div>
       <div className='text-[13px] flex items-center py-3  pl-8 opacity-60'>
         <HomeIcon width="15"/>
         <span className='ml-2'>Dashboard</span>
       </div>

       <div className='mt-4'>
        <h2 className=' pl-8 text-[13px]'>CUSTOMERS</h2>
          
          {
            routes.map((item, index)=>{
              return (
                <NavLink to ="" className='text-[13px] flex items-center py-3  pl-8 opacity-60'>
                    { item.Element }
                    <span className='ml-2'>{item.name}</span>
                </NavLink>
              )
            })
          }

       </div>

       <div className='mt-4'>
        <h2 className=' pl-8 text-[13px]'>BUSINESSES</h2>
          
          {
            routes.map((item, index)=>{
              return (
                <NavLink to ="" className='text-[13px] flex items-center py-3  pl-8 opacity-60'>
                    { item.Element }
                    <span className='ml-2'>{item.name}</span>
                </NavLink>
              )
            })
          }

       </div>

        <div className='mt-4'>
        <h2 className=' pl-8 text-[13px]'>SETTINGS</h2>
          
          {
            routes.map((item, index)=>{
              return (
                <NavLink to ="" className='text-[13px] flex items-center py-3  pl-8 opacity-60'>
                    { item.Element }
                    <span className='ml-2'>{item.name}</span>
                </NavLink>
              )
            })
          }

       </div>
    </div>
  )
}

export default SideNav
