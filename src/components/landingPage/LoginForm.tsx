import React, { useEffect, useState } from 'react'
import FormButton from '../widget/FormButton'

export default function LoginForm() {
  //Variables
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [errorMassege, setErrorMessage] = useState('')

  //Functions
  const setPasswordVisibleFunc = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    event.preventDefault()
    setPasswordVisible(!passwordVisible)
  }

  //Hooks
  useEffect(()=>{

  }, [])

  return (
    <form className='w-full lg:w-[70%] flex justify-center p-2 lg:p-0'>
      <div className='w-full sm:w-[90%] md:w-[90%]'>
        <h1 className='text-[30px] text-lengsqr-500 font-extrabold'>Welcome!</h1>
        <span className='text-[13px] text-lengsqr-500'>Enter datails to login</span>

        <div className='py-4'></div>
        <div></div>
        <div className='input-form'>
            <input placeholder='Email'/>
        </div>
        <div className='input-form'>
            <input placeholder='Password' type={passwordVisible ? 'password' : 'text'}/>
            <button className="px-0" onClick={setPasswordVisibleFunc}>
                {passwordVisible ? 'SHOW' : 'HIDE'}
            </button>
        </div>

        <div className='text-[14px] text-lengsqr-300 font-bold mt-3'>
            FORGOT PASSWORD
        </div>
        <div className='mt-6'>
            <FormButton width='100%' isLoading={true} title="LOG IN"/>
        </div>
      </div>
    </form>
  )
}
