import React from 'react'
import { TbError404 } from 'react-icons/tb'
import { Navigate, useNavigate } from 'react-router-dom'

interface Props {}

function NotFound(props: Props) {
    const {} = props
    const navigate = useNavigate()

    return (
        <div className='flex justify-center items-center h-[100vh] text-center'>
           <div>
           <TbError404 size={70}/>
           <p className='py-2'>
            Oops it seems you have missed your way
           </p>
           <button className='px-5 bg-red-600 text-white py-2 mt-6 rounded-full'
           onClick={()=>navigate("/")}
           > 
            Go to home</button>
           </div>
        </div>
    )
}

export default NotFound
