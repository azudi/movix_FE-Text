import React from 'react'
import { LineWave } from 'react-loader-spinner'

interface Props {
  width: number,
  ColorStoke?: string | undefined
}

function SmallLoader(props: Props) {
  const { width, ColorStoke } = props

  return (
    <div className="absolute -translate-y-[70%] -translate-x-[40%]">
      <LineWave
        height={width}
        width={width}
        color={ColorStoke || "#6E6893"}
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

export default SmallLoader
