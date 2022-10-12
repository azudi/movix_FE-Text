import React from 'react'
import UserICrossIcon from '../svg-icon/UserICrossIcon'
import { useState } from 'react'
import DashboardCard from './DashboardCard'

interface Props {}

function DashboardCardContainer(props: Props) {
    const {} = props
    //Variables
    const [size, setSize] = useState(30)
    const [tabs, setTabs] = useState([
        {
            title: "users",
            totalCount: "2,453",
            icon: <UserICrossIcon width={size}/>
        },
        {
            title: "active users",
            totalCount: "2,453",
            icon:  <UserICrossIcon width={size}/>
        },
    ])

    return (
        <div>
        {
           tabs.map((tab, index)=>{
               return (<DashboardCard details={tab} />)
           }) 
          }
        </div>
    )
}

export default DashboardCardContainer
