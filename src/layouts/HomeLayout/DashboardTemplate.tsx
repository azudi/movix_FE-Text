import React, { useEffect, useState } from 'react'
import SideNav from '../../components/navbar/SideNav'
import Topnav from '../../components/navbar/topnav'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { toggle } from '../../redux/navigation/navToggle'
import { Helmet } from 'react-helmet'

const DashboardTemplate = ({ children }: any) => {
  //redux-store variables
  const navIsToggle = useSelector((state: RootState) => state.toggle.value)
  const dispatch = useDispatch()

  //Variables
  const [isMobile, setIsMobile] = useState(true)

  //Function
  const setIiMobileFunc = (val: boolean) => {
    setIsMobile(val)
  }

  //Hooks
  useEffect(() => {
    window.onclick = function (event: EventTarget | null | any) {
      if (
        !(
          document
            .querySelector('.side-scroll-contain')
            ?.contains(event.target) ||
          document.querySelector('#nav-icon2')?.contains(event.target)
        )
      ) {
        if (!navIsToggle) return
        dispatch(toggle(true))
        document.querySelector('#nav-icon2')?.classList.remove('open')
      }
    }
  }, [])

  return (
    <div>
      <Topnav setIsMobile={setIiMobileFunc} />

      <main className="flex flex-wrap h-[calc(100vh-80px)] lg:overflow-hidden ">
        <section
          className={`w-[280px] z-20 h-full side-scroll-contain hide-scrollbar top-0 lg:left-0 fixed lg:relative bg-white 
          ${navIsToggle ? '-left-[300px]' : 'left-[0px]'}`}
        >
          <SideNav />
        </section>

        <section className="lg:w-[calc(100%-280px)] bg-lengsqrgray-100/50 h-full overflow-auto native-font rounded-lg w-full">
          <section className="w-[96%] md:w-[94%] md:ml-[3%] ml-[2%]">
            {children}
          </section>
        </section>
      </main>
    </div>
  )
}

export default DashboardTemplate
