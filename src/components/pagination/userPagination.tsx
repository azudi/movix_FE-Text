import React from 'react'
import ArrowLeftIcon from '../svg-icon/ArrowLeftIcon'
import ArrowRightIcon from '../svg-icon/ArrowRightIcon'

interface Props {}

function UserPagination(props: Props) {
    const {} = props

    return (
        <div className='flex flex-wrap mt-3 mb-8'>
            <div className='w-full sm:w-6/12 pagination-container items-center'>
               <span>Showing</span>
               <span className='mx-2'>
                <select disabled className='w-[50px] bg-lengsqrgray-200/10 text-[12px] p-1 rounded-sm outline-none'>
                    <option>100</option>
                </select>
               </span>
               <span>out of 100</span>
            </div >

            <div className='w-full sm:w-6/12 justify-end pages-inicate-container'>
                <i><ArrowLeftIcon width="10"/></i>
               <span>1</span>
               <span>2</span>
               <span>3</span>
               <span>....</span>
               <span>15</span>
               <span>16</span>
               <i><ArrowRightIcon width="10"/></i>
            </div>
        </div>
    )
}

export default UserPagination
