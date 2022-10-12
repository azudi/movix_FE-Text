import React, { useEffect } from 'react'
import DashboardCardContainer from '../components/dashboard/DashboardCardContainer'
import DashboardTable from '../components/dashboard/DashboardTable'
import PageLoader from '../components/widget/PageLoader'
import DashboardTemplate from '../layouts/HomeLayout/DashboardTemplate'
import { useState } from 'react'
import { Get } from '../services/query-hooks/fetch'

interface Props {}

function Dashboard(props: Props) {
    const {} = props
    const [users, setUsers] = useState([])

    //Custom Hook
  const { data: totalUser, isLoading} = Get({method:'GET', url:'/users'})
  let dataInfo : any = {}
  if(totalUser){
   dataInfo = (totalUser as any).data 
  //  setUsers(dataInfo)
   console.log("total-user",dataInfo)
  }
  
useEffect(()=>{
  if(!Array.isArray(dataInfo)) return
  setUsers(dataInfo as any)
},[totalUser])

  const filterUser =(val: object | any)=>{
     console.log(Object.entries(val))
      let filterTotalUser = dataInfo.filter((item : any,index : number)=> 
      item.email == (val?.email != ''? val.email : item.email) &&
      item.orgName == (val?.organization != ''? val.organization : item.orgName) &&
      item.phoneNumber == (val?.phoneNumber != ''? val.phoneNumber : item.phoneNumber) &&
      item.userName == (val?.username != ''? val.username : item.userName)
       )
      console.log(filterTotalUser)
      setUsers(filterTotalUser)
  }

  if(isLoading){
    return (<PageLoader/>)
  }

    return (
        <DashboardTemplate>
            <section>
                <div className='w-full py-3 text-[19px] mt-4'>Users </div>
                <div>
                    <DashboardCardContainer/>
                    <DashboardTable filterUser={filterUser} totalUser={users}/>
                </div>
            </section>
        </DashboardTemplate>
    )
}

export default Dashboard
