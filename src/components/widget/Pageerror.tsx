import React from 'react'

interface Props {}

function Pageerror(props: Props) {
    const {} = props

    return (
        <div className='w-full h-[100vh] flex items-center justify-center'>
            <div className='text-center h-auto'>
                <span className='block text-[22px]'>Could not load page</span>
                <button 
                onClick={()=>{window.location.reload()}}
                className='bg-[rgb(18,113,227)] text-white rounded-[50px] border-none px-3 py-1 mt-2'>Try again</button>
            </div>
        </div>
    )
}

export default Pageerror
