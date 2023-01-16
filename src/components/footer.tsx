import React from 'react'

interface Props {}

function Footer(props: Props) {
  const {} = props

  return (
    <div className='mt-16 mb-8'>
      <div className='flex justify-center flex-wrap dm-san'>
        <p></p>
        <div className='w-11/12 md:w-6/12 lg:w-4/12 flex justify-between text-[14px]'>
          <span>Conditions of Use</span>
          <span>Privacy & Policy</span>
          <span>Press Room</span>
        </div>
        <div className='w-full text-center text-[15px] pt-4'>
        © 2021 Movix
        </div>
      </div>
    </div>
  )
}

export default Footer
