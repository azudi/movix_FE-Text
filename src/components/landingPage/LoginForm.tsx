import React, { useEffect, useLayoutEffect, useState } from 'react'
import FormButton from '../widget/FormButton'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
  //Variables
  const [passwordVisible, setPasswordVisible] = useState(true)
  const [errorMassege, setErrorMessage] = useState('')
  const [isLoading, setisLoading] = useState(true)
  const navigation = useNavigate()

  //Functions
  const setPasswordVisibleFunc = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault()
    setPasswordVisible(!passwordVisible)
  }

  const submitUserInfo = (event: any) => {
    event.preventDefault()
    setisLoading(false)

    setTimeout(() => {
      setisLoading(true)
      localStorage.setItem(
        'lenszer-user-id',
        (Math.floor(Math.random() * 100) as unknown) as string,
      )
      navigation('/dashboard')
    }, 1000)
  }

  return (
    <form
      onSubmit={submitUserInfo}
      className="w-full lg:w-[70%] flex justify-center p-2 lg:p-0"
    >
      <div className="w-full sm:w-[90%] md:w-[90%]">
        <h1 className="text-[30px] text-lengsqr-500 font-extrabold header-form mb-2">
          Welcome!
        </h1>
        <span className="text-[14px] text-lengsqr-500 header-label">
          Enter datails to login
        </span>

        <div className="py-4"></div>
        <div></div>
        <div className="input-form">
          <input placeholder="Email" type="email" required />
        </div>
        <div className="input-form">
          <input
            placeholder="Password"
            required
            type={passwordVisible ? 'password' : 'text'}
          />
          <button className="px-0" onClick={setPasswordVisibleFunc}>
            {passwordVisible ? 'SHOW' : 'HIDE'}
          </button>
        </div>

        <div className="text-[14px] text-lengsqr-300 font-normal mt-3 forgot-label">
          FORGOT PASSWORD
        </div>
        <div className="mt-6">
          <FormButton width="100%" isLoading={isLoading} title="LOG IN" />
        </div>
      </div>
    </form>
  )
}
