import React from 'react'
import { LineWave } from 'react-loader-spinner'

interface Props {
  width: number
}

function Loader(props: Props) {
  const { width } = props

  return (
    <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full min-w-[400px]">
      <LineWave
        height={width}
        width={width}
        color="#6E6893"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  )
}

export default Loader
