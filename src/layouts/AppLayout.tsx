import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const AppLayout: React.FC<Props> = (props: Props)=> {
    const { children } = props

    return (
       <div className='w-full flex justify-center h-[100vh] items-center bg-white'>
          { children }
       </div> 
    )
}

export default AppLayout
