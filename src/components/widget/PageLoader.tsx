import React from 'react'
import { Audio, InfinitySpin } from 'react-loader-spinner'

interface Props {}

function PageLoader(props: Props) {
  const {} = props

  return (
    <div className="fixed top-0 w-full h-full justify-center items-center flex">
      <span className="ml-[150px]">
        <InfinitySpin width="300" color="#213F7D" />
      </span>
    </div>
  )
}

export default PageLoader
