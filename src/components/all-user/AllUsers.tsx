import React, { useRef, useState } from 'react'
import { StatusColor } from '../constant/status'
import { ReactComponent as DMore } from '../../assets/images/svg/More.svg'
import { ReactComponent as DArrowToggle } from '../../assets/images/svg/arrow-down.svg'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavItem,
} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { Users } from '../../redux/mutateUsers/users'
import { types } from '../constant/actionConstant'
import { PaymentStatus } from '../constant/paymentStatus'
import axios from 'axios'
import { ReactComponent as UInfo } from '../../assets/images/svg/info.svg'
import { setParams } from '../../services/query-hooks/settings'
import SmallLoader from '../widget/SmallLoader'
import toast, { Toaster } from 'react-hot-toast'
import TableHeader from '../widget/TableHeader'

interface Props {
  refresh: any
}

function AllUsers(props: Props) {
  const { refresh } = props
  const dispatch = useDispatch()
  const DisplayUsers = useSelector(
    (state: RootState) => state.toggle.displayedUser,
  )
  const inputEls = useRef(new Array())

  //Variables
  const [activeUser, setActiveUser] = useState(-1)
  const [IsloadingIndex, setLoadingIndex] = useState(-1)
  const [isLoading, setIsloading] = useState(false)

  //Functions
  const activeColor = (val: any) => {
    switch (val) {
      case 'active':
        return StatusColor.active
      case 'inactive':
        return StatusColor.inactive
    }
  }

  const paymentColor = (val: any) => {
    switch (val) {
      case 'paid':
        return PaymentStatus.PAID
      case 'unpaid':
        return PaymentStatus.UNPAID
      case 'overdue':
        return PaymentStatus.OVERDUE
    }
  }

  const resetActiveUser = (val: number) => {
    setActiveUser(activeUser == val ? -1 : val)
  }

  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    val: any,
  ) => {
    if (event.target.checked) {
      dispatch(Users({ user: val, action: types.ADD_USER }))
    } else {
      dispatch(Users({ id: val, action: types.REMOVE_USER }))
    }
  }

  const activateuser = (id: number) => {
    setIsloading(true)
    setLoadingIndex(id)
    axios
      .patch(`${setParams.BASE_URL}/activate-user/${id}`)
      .then(() => {
        toast.success('User successfully activated!')
        refresh()
      })
      .catch(() => {
        toast.error('User activation failed')
      })
      .finally(() => {
        setIsloading(false)
        setLoadingIndex(-1)
      })
  }

  const deleteuser = (id: number) => {
    setIsloading(true)
    setLoadingIndex(id)
    axios
      .delete(`${setParams.BASE_URL}/remove-user/${id}`)
      .then(() => {
        toast.error('User deleted successfully!')
        refresh()
      })
      .catch(() => {
        toast.error('User fail to delete')
      })
      .finally(() => {
        setIsloading(false)
        setLoadingIndex(-1)
      })
  }

  const checkAllInput = () => {
    let allInput = document.querySelectorAll('.user-input')
    allInput.forEach((element) => {
      //@ts-ignore
      element.checked = true
    })
  }
  const uncheckAllInput = () => {
    let allInput = document.querySelectorAll('.user-input')
    allInput.forEach((element) => {
      //@ts-ignore
      element.checked = false
    })
  }

  return (
    <section className="overflow-x-auto">
      <div className="text-sm min-w-[992px] inter">
        <TableHeader
          checkAllInput={checkAllInput}
          unCheckAllInput={uncheckAllInput}
        />

        {DisplayUsers.map((item: any, index: number) => {
          const { id } = item
          return (
            <div
              key={item.id}
              className={`grid duration-300 ${
                activeUser == index ? ' bg-scelloo-50' : 'bg-none'
              }`}
            >
              <div className="item1 flex ml-4">
                <input
                  type="checkbox"
                  onChange={(event) => {
                    onChangeInput(event, item.id)
                  }}
                  className="scale-[2] ml-4 user-input"
                ></input>
                <span
                  className={`translate-x-8 transition ${
                    activeUser == index ? 'rotate-180' : 'rotate-0'
                  }`}
                  onClick={() => {
                    resetActiveUser(index)
                  }}
                >
                  <DArrowToggle />
                </span>
              </div>
              <div className="item2">
                <b className="block text-[16px] mb-[1px]">
                  {item.firstName} {item.lastName}
                </b>
                <span className="text-scelloo-500 text-[15px] w-[180px] font-normal inline-block truncate w-full">
                  {item.email}
                </span>
              </div>
              <div className="item3">
                <span
                  className="inline-flex items-center font-[600] py-[1px] px-2 rounded-full text-[14px]"
                  style={{
                    background: (activeColor(item.userStatus) as any)[1],
                    color: (activeColor(item.userStatus) as any)[0],
                  }}
                >
                  <i
                    className="inline-block w-2 h-2 rounded-full mr-2"
                    style={{
                      background: (activeColor(item.userStatus) as any)[0],
                    }}
                  ></i>
                  {item.userStatus}
                </span>
                <span className="text-scelloo-500 font-normal block pt-1">
                  Last login: {item.lastLogin}
                </span>
              </div>
              <div className="item4">
                <span
                  className="inline-flex items-center font-[600] py-[1px] px-2 rounded-full text-[14px]"
                  style={{
                    background: (paymentColor(item.paymentStatus) as any)[1],
                    color: (paymentColor(item.paymentStatus) as any)[0],
                  }}
                >
                  <i
                    className="inline-block w-2 h-2 rounded-full mr-2"
                    style={{
                      background: (paymentColor(item.paymentStatus) as any)[0],
                    }}
                  ></i>
                  {item.paymentStatus}
                </span>
                <span className="font-normal block pt-1">
                  Dues on 15/APR/2020
                </span>
              </div>
              <div className="item5">
                <span className="text-[17px] font-[600] flex justify-end">
                  ${item.amountInCents / 100}
                </span>
                <span className="text-scelloo-500 font-normal flex justify-end">
                  USD
                </span>
              </div>
              <div className="item6 text-center text-scelloo-500">
                View more
              </div>
              <div className="item7 inline-flex justify-end mr-4 text-dropdown">
                <CDropdown>
                  <CDropdownToggle color="secondary">
                    {' '}
                    {isLoading && IsloadingIndex == item.id ? (
                      <SmallLoader width={60} />
                    ) : (
                      <DMore />
                    )}
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>Edit</CDropdownItem>
                    <CDropdownItem>View Profile</CDropdownItem>
                    <CDropdownItem
                      onClick={() => {
                        activateuser(item.id)
                      }}
                    >
                      <abbr className="cursor-pointer text-scellogreen-500">
                        Activate User
                      </abbr>
                    </CDropdownItem>
                    <CDropdownItem
                      onClick={() => {
                        deleteuser(item.id)
                      }}
                    >
                      <abbr className="cursor-pointer text-scellored-500">
                        {' '}
                        Delete
                      </abbr>
                    </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </div>

              {/* the user content dropdown */}
              <div
                className={`item-base  justify-end ${
                  activeUser == index ? 'block' : 'hidden'
                }`}
              >
                <div className="w-full">
                  <div className="user-content-header justify-end">
                    <div className="w-2/12">DATE</div>
                    <div className="w-3/12">USER ACTIVITY</div>
                    <div className="w-6/12 flex items-center">
                      DETAILS &nbsp;
                      <UInfo />
                    </div>
                  </div>
                  {[...item.activities].map((item: any, index: number) => {
                    return (
                      <div
                        key={index + 'act'}
                        className="user-content-detail justify-end inter"
                      >
                        <div className="w-2/12">{item.date}</div>
                        <div className="w-3/12 text-black pr-3">
                          {item.userActivity}
                        </div>
                        <div className="w-6/12 text-black pr-3">
                          {item.details}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default AllUsers
