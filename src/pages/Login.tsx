import React, { useEffect, useLayoutEffect } from 'react'
import groupIcon from '../assets/image/Group.png'
import groupLabel from '../assets/image/pablo-sign-in 1.png'
import LoginForm from '../components/landingPage/LoginForm'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

interface Props {}

function Login(props: Props) {
  const {} = props
  const navigation = useNavigate()

  //Hooks
  useEffect(() => {
    if (localStorage.getItem('lenszer-user-id')) navigation('/dashboard')

    let pallet = document.querySelectorAll('.landing-down')
    let start = 0
    let childTranslateNav = setInterval(() => {
      ;(pallet[start] as any).style.cssText = 'opacity:1;top:0'
      start++

      if (start >= pallet.length) {
        clearInterval(childTranslateNav)
      }
    }, 700)
  }, [])


  return (
    <main className="landing-container flex-wrap">
      <div className="landing-down login-image-container  w-11/12 lg:w-6/12 md:w-8/12">
        <div>
          <img alt="" src={groupIcon}></img>
        </div>
        <div>
          <img alt="" src={groupLabel} className="w-[100%]"></img>
        </div>
      </div>
      <div className="landing-down login-form-container w-11/12 lg:w-6/12 md:w-8/12 shadow-md flex justify-center">
        <LoginForm />
      </div>
    </main>
  )
}

export default Login
