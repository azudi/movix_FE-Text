
import React from 'react'
import GroupLogo from "../../assets/image/Group.png"
import BellNotificationIcon from '../svg-icon/BellNotificationIcon'
import SearchIcon from '../svg-icon/SearchIcon'
import profileIcon from "../../assets/image/image 4.png"

interface Props {}

function Topnav(props: Props) {
  const {} = props

  return (
    <nav className='nav-container h-20'>
      <div className='w-6/12 md:w-3/12'>
        <img alt="" src={GroupLogo} className='w-[120px]'></img>
      </div>
      <div className='w-6/12 md:inline-block hidden p-0'>
          <div className='top-nav-search p-0'>
            <input placeholder='Search anything'/>
            <button>
              <SearchIcon width='18'/>
            </button>
          </div>
      </div>
      <div className='w-6/12 md:w-3/12 flex items-center justify-end lg:mr-5'>
        <span className='inline-block mx-3 underline text-[14px] text-lengsqr-500'>Docs</span>
          <span className='inline-block mx-3'>
            <BellNotificationIcon width="25"/>
          </span>
          <div className='inline-flex mx-3 items-center'>
            <span className='w-10 h-10 '>
              <img src={profileIcon} alt='' className='rounded-full overflow-hidden'></img>
            </span>
            <small className='ml-1'>Adeniyi</small>
            
          </div>
      </div>
    </nav>
  )
}

export default Topnav
