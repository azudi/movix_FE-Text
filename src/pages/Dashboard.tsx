import React, { useEffect } from 'react'
import DashboardCardContainer from '../components/dashboard/DashboardCardContainer'
import DashboardTable from '../components/dashboard/DashboardTable'
import PageLoader from '../components/widget/PageLoader'
import DashboardTemplate from '../layouts/HomeLayout/DashboardTemplate'
import { useState } from 'react'
import { Get } from '../services/query-hooks/fetch'
import UserPagination from '../components/pagination/userPagination'
import Pageerror from '../components/widget/Pageerror'

interface Props {}

function Dashboard(props: Props) {
  const {} = props
  const [users, setUsers] = useState([])
  const [totalPage, setTotalPage] = useState<any>()
  const [defaultPage, setdefaultPage] = useState(10)
  const [startIndex, setstartIndex] = useState(1)
  const [activepage, setactivePage] = useState(1)

  //Custom Hook
  const { data: totalUser, isLoading, isError } = Get({ method: 'GET', url: '/users' })
  let dataInfo: any = {}
  if (totalUser) {
    dataInfo = (totalUser as any).data
    //  setUsers(dataInfo)
  }

  useEffect(() => {
    if (!Array.isArray(dataInfo)) return
    setTotalPage(Math.round(dataInfo.length/defaultPage))
    paginateUsers(dataInfo)
  }, [totalUser])

  useEffect(()=>{
    getNumUserPages()
  },[defaultPage])


  const filterUser = (val: object | any) => {
    let filterTotalUser = dataInfo.filter(
      (item: any, index: number) =>
        item.email == (val?.email != '' ? val.email : item.email) &&
        item.orgName ==
          (val?.organization != '' ? val.organization : item.orgName) &&
        item.phoneNumber ==
          (val?.phoneNumber != '' ? val.phoneNumber : item.phoneNumber) &&
        item.userName == (val?.username != '' ? val.username : item.userName),
    )
    setUsers(filterTotalUser)
   setTotalPage(Math.floor(users.length/defaultPage))
  }

  const resetDefaultPage=(val: any)=>{
    setdefaultPage(val)
    setactivePage(1)
    paginateUsers(dataInfo, val)
  }

  const paginateUsers=(dataUsers : any, val?: number | any)=>{
    let filterUserTopage = dataUsers.filter((item: any,index : number)=> index < (val || defaultPage))
    setUsers(filterUserTopage as any)
  }

  const getNumUserPages=()=>{
    let checkForReminder = dataInfo.length % defaultPage > 0 ? 1 : 0
    setTotalPage(Math.floor(dataInfo.length/defaultPage) + checkForReminder) 
  }  

  const splitpages =(val : number)=>{
    setactivePage(val)
    let filterUserTopage = dataInfo.filter((item: any,index : number)=> 
    index > defaultPage*(val-1) && index < defaultPage*(val))
    setUsers(filterUserTopage as any) 
   }

   const ArrowmovePage=(val:string)=>{
    switch (val) {
      case 'back':
        setactivePage(activepage-1)
        splitpages(activepage)
        break;
    
      case 'next':
        setactivePage(activepage+1)
        splitpages(activepage)
          break;
    }
   }

  if (isLoading) {
    return <PageLoader />
  }
  if(isError){
    return (<Pageerror/>)
  }

  return (
    <DashboardTemplate>
      <section>
        <div className="w-full py-3 text-[19px] mt-4">Users </div>
        <div>
          <DashboardCardContainer />
          <DashboardTable filterUser={filterUser} totalUser={users} />
          <UserPagination ArrowmovePage={ArrowmovePage}
           splitpages={splitpages} 
           totalPage={totalPage} 
           activePage={activepage}
           resetDefaultPage={resetDefaultPage}
           />
        </div>
      </section>
    </DashboardTemplate>
  )
}

export default Dashboard
