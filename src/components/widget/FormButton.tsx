import React from 'react'
import SpinnerDotIcon from '../svg-icon/SpinnerDotIcon'

interface Props {
    width: string,
    isLoading: Boolean,
    title: string
}

function FormButton(props: Props) {
    const {title, width, isLoading} = props

    return (
        <button className={`text-md bg-lengsqr-300 text-white flex justify-center items-center h-10 rounded-md`} style={{width: width}}>
            {title}
            { !isLoading &&  <span className='ml-3 animate-spin'>
                <SpinnerDotIcon width='24' color="white"/> 
            </span> }
        </button>
    )
}

export default FormButton
