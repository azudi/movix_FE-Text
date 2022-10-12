
import { useEffect } from 'react'
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
import PrefrenceIcon from '../svg-icon/PrefrenceIcon'
import FeesAndPricingIcon from '../svg-icon/FeesAndPricingIcon'
import AuditLogsIcon from '../svg-icon/AuditLogsIcon'
import { IoIosArrowDown } from 'react-icons/io';
import { scrollAnimate } from '../functions/scrollAnimate'
import SignOutIcon from '../svg-icon/SignOutIcon'
import SystemManagementIcon from '../svg-icon/SystemManagementIcon'



interface Props {}

function SideNav(props: Props) {
  const {} = props

  //Variables
  const [iconWidth, setWidthIcon] = useState(16)
  const [route, setRoute] = useState('Users')
  const [routes, setRoutes] = useState({
    cutomers: [
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
    
  ],
  setting: [
    {
      name:'Preferences',
      route: '/Preferences',
      Element: <PrefrenceIcon width={iconWidth}/>
    },
    {
      name:'Fees and Pricing',
      route: '/Fees-and-Pricing',
      Element: <FeesAndPricingIcon width={iconWidth}/>
    },
    {
      name:'Audit Logs',
      route: '/Audit-Logs',
      Element: <AuditLogsIcon width={iconWidth}/>
    },
    {
      name:'Systems Messages',
      route: '/Systems-Messages',
      Element: <SystemManagementIcon width={iconWidth}/>
    },
    {
      name:'Logout',
      route: '/Logout',
      Element: <SignOutIcon width={iconWidth}/>
    },
  ],
  business: [
    {
      name:'Organization',
      route: '/organization',
      Element:  <BriefcaseIcon width={iconWidth}/>
    },
    {
      name:'Loan Products',
      route: '/loan-Products',
      Element: <LoanIcon width={iconWidth}/>
    },
    {
      name:'Audit Logs',
      route: '/Audit-Logs',
      Element: <AuditLogsIcon width={iconWidth}/>
    },
  ]

})

  //Functions
 useEffect(()=>{
  scrollAnimate('.side-scroll-contain', '.nav-scroll-item')
 },[])

 useEffect(()=>{
  let pallet = document.querySelectorAll(".nav-scroll-item");
  let start = 0
 let childTranslateNav =  setInterval(()=>{
     (pallet[start] as any).style.cssText = 'opacity:0.6;left:0'
     start++
     if(start >= pallet.length) {
      clearInterval(childTranslateNav)
    }
  },200)

 
   
 },[])

  const setNavigation = (val: string)=>{
       setRoute(val)
  }

  return (
    <div className='w-full side-nav-container'>
       <div className='text-[13px] flex items-center py-6  pl-8'>
         <BriefcaseIcon width="15"/>
         <span className='mx-2'>Switch Organization</span>
          <i className='inline-block mt-[1px]'> <IoIosArrowDown width='13px' color="gray"/> </i>
       </div>
       <div className='text-[13px] nav-scroll-item flex items-center py-3  pl-8 opacity-60'>
         <HomeIcon width="15"/>
         <span className='ml-2'>Dashboard</span>
       </div>

       <div className='mt-4'>
        <h2 className=' pl-8 text-[13px]'>CUSTOMERS</h2>
          
          {
            routes.cutomers.map((item, index)=>{
              return (
                <NavLink to ="" 
                key={item.name} 
                onClick={()=>{
                  setNavigation(item.name)
                }}
                className={`nav-scroll-item text-[13px] flex items-center py-3  pl-8 opacity-60 
                ${route == item.name ? "nav-border-start" : "" }
              `}>
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
            routes.business.map((item, index)=>{
              return (
                <NavLink to ="" 
                key={item.name} 
                  onClick={()=>{
                    setNavigation(item.name)
                  }}
                className={`text-[13px] nav-scroll-item flex items-center py-3  pl-8 opacity-60 
                  ${route == item.name ? "nav-border-start" : "" }
                `}>
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
            routes.setting.map((item, index)=>{
              return (
                <NavLink to =""
                key={item.name} 
                onClick={()=>{
                  setNavigation(item.name)
                }}
                className={`text-[13px] nav-scroll-item flex items-center py-3  pl-8 opacity-60 
                  ${route == item.name ? "nav-border-start" : "" }
                `}>
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
