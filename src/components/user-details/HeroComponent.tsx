import React, { useState, useEffect } from 'react'
import CircleUserIcon from '../svg-icon/CircleUserIcon'

interface Props {
  userInfo: any
}

function HeroComponent(props: Props) {
  const { userInfo } = props
  console.log('marry-me', userInfo)
  //Varialbe
  const [activePath, setActivePath] = useState('General Details')
  const [detailRoute, setDetailRoute] = useState([
    {
      route: '/General Details',
      name: 'General Details',
    },
    {
      route: '/Documents',
      name: 'Documents',
    },
    {
      route: '/Bank Details',
      name: 'Bank Details',
    },
    {
      route: '/Loans',
      name: 'Loans',
    },
    {
      route: '/Savings',
      name: 'Savings',
    },
    {
      route: '/App and System',
      name: 'App and System',
    },
  ])

  //Function
  const resetPath = (val: string) => {
    setActivePath(val)
  }

  useEffect(() => {
    let pallet = document.querySelectorAll('.hero-info-user')
    let start = 0
    let childTranslateHead = setInterval(() => {
      ;(pallet[start] as any).style.cssText = 'opacity:1;left:0'
      start++
      if (start >= pallet.length) clearInterval(childTranslateHead)
    }, 500)
  }, [userInfo])

  return (
    <div className=" bg-white w-full mt-4 hero-container shadow-md rounded-md hero-info-user">
      <div className="flex p-5 pb-3 px-4 flex-wrap">
        <div className="border-r-gray border-r-[2px] flex items-center w-full sm:w-6/12 md:w-4/12 lg:w-4/12 mb-3">
          {!userInfo?.profile.avatar ? (
            <CircleUserIcon width="80" />
          ) : (
            <img
              alt=""
              src={userInfo?.profile.avatar}
              className="w-[80px] rounded-full"
            />
          )}
          <div className="ml-4">
            <b className="block truncate w-full">{`${userInfo?.profile.firstName} ${userInfo?.profile.lastName}`}</b>
            <span className="text-[12px]">{userInfo?.accountNumber}</span>
          </div>
        </div>
        <div className="border-r-gray self-stretch border-r-[2px] flex items-center  w-full sm:w-6/12 md:w-4/12 lg:w-3/12 mb-3">
          <div className="ml-4">
            <b className="font-normal text-[13px] block ">
              User’s Tier
            </b>
            <span className="text-[20px] text-[#E9B200]">
              &#9733;&#9734;&#9734;
            </span>
          </div>
        </div>
        <div className=" flex items-center  w-full sm:w-6/12 md:w-4/12 lg:w-3/12 mb-3">
          <div className="ml-4">
            <b className="block">₦{userInfo?.accountBalance}</b>
            <span className="text-[12px]">
              {userInfo?.accountNumber}/Providus Bank
            </span>
          </div>
        </div>
      </div>

      <div className="px-2">
        <div className="w-[100%] flex md:overflow-hidden overflow-scroll ">
          {detailRoute.map((path, index) => {
            return (
              <div
                onClick={() => {
                  setActivePath(path.name)
                }}
                key={path.name}
                className={`px-3 text-[14px] py-[10px] mx-1 inline-block whitespace-nowrap cursor-pointer transition
                        ${path.name == activePath ? 'sub-active-path' : ''}
                        `}
              >
                {path.name}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
