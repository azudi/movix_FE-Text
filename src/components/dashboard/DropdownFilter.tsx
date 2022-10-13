import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/react'
import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import { RiArrowDownSLine } from 'react-icons/ri'
import ActivateUserIcon from '../svg-icon/ActivateUserIcon'
import BlacklistUserIcon from '../svg-icon/BlacklistUserIcon'
import DotsVerticalIcon from '../svg-icon/DotsVerticalIcon'
import EyeIcon from '../svg-icon/EyeIcon'

interface Props {
  filterUser: Function
  showFilterFunc: Function
  visible: Boolean
}

function DropdownFilter(props: Props) {
  const { filterUser, showFilterFunc, visible } = props

  const filterContainer = useRef<any>()

  //Variable
  const [user, setUser] = useState({
    username: '' as string | undefined | readonly string[],
    organization: '' as string | undefined | readonly string[],
    email: '' as string | undefined | readonly string[],
    date: '' as string | undefined | readonly string[],
    phoneNumber: '' as string | undefined | readonly string[],
    status: '' as string | undefined | readonly string[],
  })

  //Function
  const filterUserFunc = () => {
    showFilterFunc()
    filterUser(user)
  }
  useEffect(() => {
    if (visible) filterContainer.current.classList.add('transitFilter')
    else filterContainer.current.classList.remove('transitFilter')
  }, [visible])

  return (
    <div
      ref={filterContainer}
      style={{ transitionDuration: '0.4s' }}
      className={`filter-container bg-white absolute top-8 p-3 w-[300px] shadow-md rounded-lg border-[1px] border-gray-200`}
    >
      <div className="mb-[10px]">
        <label className="text-[13px] mb-1 font-bold">Organization</label>
        <CDropdown>
          <CDropdownToggle color="transparent">
            <div className="w-[265px] border-gray-300 border-[2px] flex items-center py-1 px-2 rounded-lg">
              <input
                className="drop-filter-component text-[13px] bg-transparent"
                value={user.organization}
                disabled
              ></input>
              <span className="w-[35px] inline-flex justify-center items-center opacity-60">
                <RiArrowDownSLine size="25" />
              </span>
            </div>
          </CDropdownToggle>

          <CDropdownMenu>
            {['marry celetia', 'douglas mariam', 'caster mills'].map(
              (item, index) => {
                return (
                  <CDropdownItem key={item}>
                    <span
                      className="user-toggle-item"
                      onClick={() => {
                        setUser({ ...user, organization: item })
                      }}
                    >
                      {item}
                    </span>
                  </CDropdownItem>
                )
              },
            )}
          </CDropdownMenu>
        </CDropdown>
      </div>

      <div className="mb-[10px]">
        <label className="text-[13px] mb-1 font-bold">Username</label>
        <div className="w-full border-gray-300 border-[2px] flex items-center py-[7px] px-2 rounded-lg">
          <input
            onChange={(event) => {
              setUser({ ...user, username: event.target.value })
            }}
            className="drop-filter-component text-[13px]"
          ></input>
        </div>
      </div>

      <div className="mb-[10px]">
        <label className="text-[13px] mb-1 font-bold">Email</label>
        <div className="w-full border-gray-300 border-[2px] flex items-center py-[7px] px-2 rounded-lg">
          <input
            type="email"
            onChange={(event) => {
              setUser({ ...user, email: event.target.value })
            }}
            className="drop-filter-component text-[13px]"
          ></input>
        </div>
      </div>

      <div className="mb-[10px]">
        <label className="text-[13px] mb-1 font-bold">Date</label>
        <div className="w-full border-gray-300 border-[2px] flex items-center py-[7px] px-2 rounded-lg">
          <input
            type="date"
            className="drop-filter-component text-[13px]"
          ></input>
        </div>
      </div>

      <div className="mb-[10px]">
        <label className="text-[13px] mb-1 font-bold">Phone Number</label>
        <div className="w-full border-gray-300 border-[2px] flex items-center py-[7px] px-2 rounded-lg">
          <input
            type="number"
            onChange={(event) => {
              setUser({ ...user, phoneNumber: event.target.value })
            }}
            className="drop-filter-component text-[13px]"
          ></input>
        </div>
      </div>

      <div className="mb-[10px]">
        <label className="text-[13px] mb-1 font-bold">Status</label>
        <CDropdown>
          <CDropdownToggle color="transparent">
            <div className="w-[265px] border-gray-300 border-[2px] flex items-center py-1 px-2 rounded-lg">
              <input
                className="drop-filter-component text-[13px] bg-transparent"
                value={user.status}
                disabled
              ></input>
              <span className="w-[35px] inline-flex justify-center items-center opacity-60">
                <RiArrowDownSLine size="25" />
              </span>
            </div>
          </CDropdownToggle>

          <CDropdownMenu>
            {['marry celetia', 'douglas mariam', 'caster mills'].map(
              (item, index) => {
                return (
                  <CDropdownItem key={item}>
                    <span
                      className="user-toggle-item"
                      onClick={() => {
                        setUser({ ...user, status: item })
                      }}
                    >
                      {item}
                    </span>
                  </CDropdownItem>
                )
              },
            )}
          </CDropdownMenu>
        </CDropdown>
      </div>

      <div className="filter-button-container">
        <button>Reset</button>
        <button onClick={filterUserFunc}>Filter</button>
      </div>
    </div>
  )
}

export default DropdownFilter
function showFilterFunc() {
  throw new Error('Function not implemented.')
}
