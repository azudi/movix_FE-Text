import React, { useEffect } from 'react'
import UserICrossIcon from '../svg-icon/UserICrossIcon'
import { useState } from 'react'
import DashboardCard from './DashboardCard'
import ActiveUsers from '../svg-icon/ActiveUsers'
import UsersIcon from '../svg-icon/UsersIcon'
import UserWithLoan from '../svg-icon/UserWithLoan'
import UserWithSavings from '../svg-icon/UserWithSavings'
import { XyzTransition } from "@animxyz/react";

interface Props {}

function DashboardCardContainer(props: Props) {
    const {} = props
    //Variables
    const [size, setSize] = useState(40)
    const [tabs, setTabs] = useState([
        {
            title: "users",
            totalCount: "2,453",
            icon: <ActiveUsers width={size}/>
        },
        {
            title: "active users",
            totalCount: "2,453",
            icon:  <UsersIcon width={size}/>
        },
        {
            title: "Users with Loans",
            totalCount: "12,453",
            icon:  <UserWithLoan width={size}/>
        },
        {
            title: "Users with Savings",
            totalCount: "102,523",
            icon:  <UserWithSavings width={size}/>
        },
    ])

    useEffect(()=>{
        let pallet = document.querySelectorAll(".card-pallet");
        let start = 0
       let childTranslateNav =  setInterval(()=>{
           (pallet[start] as any).style.cssText = 'opacity:1;top:0'
           start++
           if(start >= pallet.length) clearInterval(childTranslateNav)
        },600)
      
        
    },[])

    return (
        <div 
        className='flex flex-wrap w-full justify-around lg:justify-between '>
        {
           tabs.map((tab, index)=>{
               return (
               <div 
               key={tab.title}
               className='card-pallet box-shake lg:w-[calc(25%-1em)]  sm:w-[calc(50%-1em)] w-[calc(50%-1em)] border-[1px] border-gray-200 shadow-md my-2'>
                  <DashboardCard details={tab} />
               </div>)
           }) 
          }
        </div>

    )
}

export default DashboardCardContainer
