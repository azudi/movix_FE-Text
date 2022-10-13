import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import GroupLogo from '../../assets/image/Group.png'
import BellNotificationIcon from '../svg-icon/BellNotificationIcon'
import SearchIcon from '../svg-icon/SearchIcon'
import profileIcon from '../../assets/image/image 4.png'
import { IoMdArrowDropdown } from 'react-icons/io'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { Get } from '../../services/query-hooks/fetch'
import toast from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { toggle } from '../../redux/navigation/navToggle'

interface Props {
  setIsMobile: Function
}

function Topnav(props: Props) {
  const navIsToggle = useSelector((state: RootState) => state.toggle.value)
  const dispatch = useDispatch()

  const navigation = useNavigate()
  const navIcon = useRef<any>()
  const { setIsMobile } = props

  //Variable
  const [userData, setUserData] = useState<any>()
  const [mobileView, setMobileView] = useState(false)

  //Functions
  const logout = () => {
    localStorage.removeItem('lenszer-user-id')
    toast.success('Log-out successfully', {
      duration: 4000,
      position: 'top-right',
    })
    navigation('/')
  }

  //Hooks
  useEffect(() => {
    window.addEventListener('storage', () => {
      if (!localStorage.getItem('lenszer-user-id')) navigation('/')
    })
  }, [])

  useLayoutEffect(() => {
    if (!localStorage.getItem('lenszer-user-id')) navigation('/')
  }, [])

  //Custom Hook
  const { data: ProfileData, isLoading } = Get({
    method: 'GET',
    url: `/users/${localStorage.getItem('lenszer-user-id')}`,
  })
  let dataInfo: any = {}
  if (ProfileData) {
    dataInfo = (ProfileData as any).data
    // console.log(ProfileData)
  }

  const toggleSideBar = () => {
    let navElem = document.querySelector('#nav-icon2') as HTMLDivElement
    navElem?.classList.toggle('open')
    if (navElem.classList.contains('open')) {
      dispatch(toggle(false))
    } else {
      dispatch(toggle(true))
    }
  }

  return (
    <nav className="nav-container h-20">
      <div className="w-6/12 lg:w-3/12">
        <img alt="" src={GroupLogo} className="w-[120px]"></img>
      </div>
      <div className="w-6/12 lg:inline-block lg:w-3/12 hidden p-0">
        <div className="top-nav-search p-0">
          <input placeholder="Search anything" />
          <button>
            <SearchIcon width="18" />
          </button>
        </div>
      </div>
      <div className="w-6/12 lg:w-6/12 flex items-center justify-end lg:mr-5">
        <span className="mx-3 underline text-[14px] text-lengsqr-500 hidden sm:inline-block cursor-pointer">
          Docs
        </span>
        <span className="inline-block mx-3 cursor-pointer">
          <BellNotificationIcon width="25" />
        </span>
        <div className="inline-flex mx-3 items-center">
          <span className="w-10 h-10 mr-2">
            <img
              src={dataInfo?.profile?.avatar || profileIcon}
              alt=""
              className="rounded-full overflow-hidden"
            ></img>
          </span>
          <CDropdown>
            <CDropdownToggle color="transparent">
              <span className="inline-flex item-center">
                <small className="hidden sm:inline">
                  {dataInfo?.profile?.firstName}
                </small>
                <span className="sm:mt-1">
                  <IoMdArrowDropdown />
                </span>
              </span>
            </CDropdownToggle>
            <CDropdownMenu
              style={{ transform: 'translate3d(-80px, 50px, 0px)' }}
            >
              <CDropdownItem>
                <span
                  className="inline-flex item-center w-full cursor-pointer"
                  onClick={logout}
                >
                  <span className="mt-[5px]">
                    <RiLogoutCircleLine />
                  </span>
                  <span className="ml-2">logout</span>
                </span>
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>

          <div
            onClick={toggleSideBar}
            className="cursor-pointer"
            id="nav-icon2"
            ref={navIcon}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Topnav
