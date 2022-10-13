import React, { useEffect } from 'react'
import FilterIcon from '../svg-icon/FilterIcon'
import { useState, useRef } from 'react'
import DotsVerticalIcon from '../svg-icon/DotsVerticalIcon'
import '@coreui/coreui/dist/css/coreui.min.css'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavItem,
} from '@coreui/react'
import DropdownFilter from './DropdownFilter'
import EyeIcon from '../svg-icon/EyeIcon'
import BlacklistUserIcon from '../svg-icon/BlacklistUserIcon'
import ActivateUserIcon from '../svg-icon/ActivateUserIcon'
import { useNavigate } from 'react-router-dom'
import { XyzTransition } from '@animxyz/react'
import { status } from '../functions/status'
import { Helmet } from 'react-helmet'

interface Props {
  totalUser: any
  filterUser: Function
}

function DashboardTable(props: Props) {
  const { totalUser, filterUser } = props

  const navigation = useNavigate()
  const parent = useRef<any>()

  //Variables
  const [showFilter, settShowFilter] = useState(true)
  const [scrollClip, setScrollClip] = useState(13)
  const [visible, setVisible] = useState(false)

  // Functions
  const userStaus = (status: string) => {
    switch (status) {
      case 'inactive':
        return 'rgba(84, 95, 125, 0.2)'
      case 'pending':
        return 'rgba(233, 178, 0, 0.2)'
      case 'blacklisted':
        return 'rgba(228, 3, 59, 0.2)'
      case 'active':
        return 'rgba(57, 205, 98, 0.2)'
    }
  }

  useEffect(() => {
    document.body.onclick = function (event: EventTarget | null | any) {
      if (
        !(
          document.querySelector('thead')?.contains(event.target) ||
          document.querySelector('.filter-container')?.contains(event.target)
        )
      ) {
        settShowFilter(true)
      }
    }
  })

  const showFilterFunc = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>, val?:any
  ) => {
    settShowFilter(false)
    let moveInPixels =
      (event?.target as any)?.getBoundingClientRect().left -
      parent.current.getBoundingClientRect().left
    const filterObject = Array.from(
      document.getElementsByClassName('filter-container') as HTMLCollectionOf<
        HTMLElement
      >,
    )
     if(val){
      settShowFilter(true)
     }
    filterObject.forEach((box) => {
      box.style.transform = `translateX(${moveInPixels}px)`
    })
  }

  const checkOffset = (event: any) => {
    if (
      event.target.scrollLeft + 100 >=
      event.target.scrollWidth - event.target.clientWidth
    ) {
      setScrollClip(-13)
    } else {
      setScrollClip(13)
    }
  }

  useEffect(() => {
    let pallet = document.querySelectorAll('.user-comp-detail')
    let start = 0
    console.log(pallet.length)
    let childTranslateLap = setInterval(() => {
      ;(pallet[start] as any).style.cssText = 'opacity:1;left:0'
      start++
      if (start >= pallet.length) clearInterval(childTranslateLap)
    }, 300)

    if (start >= pallet.length) clearInterval(childTranslateLap)
  }, [totalUser])

  return (
    <div className=" bg-white rounded-md p-6 custom-transition py-4 mt-8">
      <div
        className={`w-full  overflow-x-auto relative user-comp-detail`}
        style={{
          boxShadow: `${scrollClip}px -1px 8px -6px rgba(173,151,151,0.3) inset`,
        }}
        onScroll={checkOffset}
        ref={parent}
      >
        <DropdownFilter
          visible={showFilter}
          showFilterFunc={showFilterFunc}
          filterUser={filterUser}
        />

        <table width="100%" className="user-table">
          <thead className="user-table-head">
            <tr className="click-container">
              <td>
                <span onClick={showFilterFunc}>
                  Organization &nbsp;
                  <FilterIcon width="11" />
                </span>
              </td>
              <td>
                <span onClick={showFilterFunc}>
                  Username &nbsp;
                  <FilterIcon width="11" />
                </span>
              </td>
              <td>
                <span onClick={showFilterFunc}>
                  Email &nbsp;
                  <FilterIcon width="11" />
                </span>
              </td>
              <td>
                <span onClick={showFilterFunc}>
                  Phone number &nbsp;
                  <FilterIcon width="11" />
                </span>
              </td>
              <td>
                <span onClick={showFilterFunc}>
                  Date joined &nbsp;
                  <FilterIcon width="11" />
                </span>
              </td>
              <td>
                <span onClick={showFilterFunc}>
                  Status &nbsp;
                  <FilterIcon width="11" />
                </span>
              </td>
              <td>
                <span onClick={showFilterFunc}></span>
              </td>
            </tr>
          </thead>
          <tbody className="user-table-body">
            {totalUser.map((item: any, index: any) => {
              return (
                <tr className="py-3" key={item.email}>
                  <td className='pl-1'>{item.orgName}</td>
                  <td>{item.userName} </td>
                  <td>{item.email} </td>
                  <td>{item.phoneNumber}</td>
                  <td>
                    {item.createdAt
                      .replace('T', ' ')
                      .substring(0, item.createdAt.indexOf('.'))}{' '}
                  </td>
                  <td>
                    <button
                      className={`px-4 py-[3px] text-[13px] rounded-[50px] capitalize`}
                      style={{
                        backgroundColor: userStaus(status[index]),
                        color: userStaus(status[index])?.replace('0.', ''),
                      }}
                    >
                      {status[index]}
                    </button>
                  </td>
                  <td className='pr-2'>
                    <CDropdown>
                      <CDropdownToggle color="transparent">
                        <DotsVerticalIcon width="15px" />
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem
                          onClick={() => {
                            navigation(`/user-details/?userId=${item.id}`)
                          }}
                        >
                          <span className="user-toggle-item">
                            <EyeIcon width="15" /> &nbsp; View Details
                          </span>
                        </CDropdownItem>
                        <CDropdownItem href="#">
                          <span className="user-toggle-item">
                            <BlacklistUserIcon width="15" /> &nbsp; Blacklist
                            User
                          </span>
                        </CDropdownItem>
                        <CDropdownItem href="#">
                          <span className="user-toggle-item">
                            <ActivateUserIcon width="15" /> &nbsp; Activate User{' '}
                          </span>
                        </CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashboardTable
