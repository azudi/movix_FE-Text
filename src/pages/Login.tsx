import React from 'react'
import groupIcon from "../assets/image/Group.png"
import groupLabel from "../assets/image/pablo-sign-in 1.png"
import LoginForm from '../components/landingPage/LoginForm'

interface Props {}

function Login(props: Props) {
    const {} = props

    return (
        <main className='landing-container flex-wrap'>
            <div className='login-image-container  w-11/12 lg:w-6/12 md:w-8/12'>
               <div><img alt="" src={groupIcon}></img></div>
               <div>
                    <img alt="" src={groupLabel} className="w-[100%]"></img>
               </div>
            </div>
            <div className='login-form-container w-11/12 lg:w-6/12 md:w-8/12'>
                <LoginForm/>
            </div>
        </main>
    )
}

export default Login
