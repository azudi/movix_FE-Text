import React, { useEffect } from 'react'
import LongArrowLeft from '../components/svg-icon/LongArrowLeft'
import FullDetails from '../components/user-details/FullDetails'
import HeroComponent from '../components/user-details/HeroComponent'
import DashboardTemplate from '../layouts/HomeLayout/DashboardTemplate'
import { useNavigate, useLocation } from 'react-router-dom'
import { Get } from '../services/query-hooks/fetch'
import PageLoader from '../components/widget/PageLoader'
import Pageerror from '../components/widget/Pageerror'

interface Props {}

function UserDetails(props: Props) {
  const {} = props

  const navigation = useNavigate()
  const search = useLocation().search
  const name = new URLSearchParams(search).get('userId')
  console.log('url-name', name)


  const { data: totalUser, isLoading, error, isError } = Get({
    method: 'GET',
    url: `/users/${name}`,
  })
  let dataInfo: any = {}
  if (totalUser) {
    dataInfo = (totalUser as any).data
    console.log('details-total-user', totalUser)
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
        <div className="w-full py-3 text-[19px] mt-4 headline">
          <span
            onClick={() => {
              navigation('/dashboard')
            }}
            className="inline-flex items-center text-[14px] text-lengsqr-500 cursor-pointer"
          >
            <LongArrowLeft width="25" />
            &nbsp; Back to Users
          </span>
        </div>
        <div className="flex flex-wrap w-full items-align">
          <div className="xs:w-6/12 w-full text-[18px] capitalize font-bold mt-2 text-lengsqr-500">
            {' '}
            user details{' '}
          </div>
          <div className="xs:w-6/12 w-full lg:text-right mt-2">
            <button className="px-4 uppercase py-2 text-[11px] border-[2px] border-[#E4033B] text-[#E4033B] font-bold rounded-lg mr-3">
              Blacklist User
            </button>
            <button className="px-4 uppercase py-2 text-[11px] border-[2px] border-[#39CDCC] text-[#39CDCC] font-bold rounded-lg">
              Activate User
            </button>
          </div>
        </div>
        <div>
          <HeroComponent userInfo={dataInfo} />

          <div className="my-4">
            <FullDetails userInfo={dataInfo} />
          </div>
        </div>
      </section>
    </DashboardTemplate>
  )
}

export default UserDetails
