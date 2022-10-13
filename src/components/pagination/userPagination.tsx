import React from 'react'
import ArrowLeftIcon from '../svg-icon/ArrowLeftIcon'
import ArrowRightIcon from '../svg-icon/ArrowRightIcon'

interface Props {
  resetDefaultPage: Function
  totalPage: Number | any
  splitpages: Function
  ArrowmovePage: Function
  activePage: number| string
}
interface totalPage {
  length: any
}

function UserPagination(props: Props) {
  const { resetDefaultPage, totalPage, splitpages, ArrowmovePage, activePage } = props

  return (
    <div className="flex flex-wrap mt-3 mb-8">
      <div className="w-full sm:w-6/12 pagination-container items-center">
        <span>Showing</span>
        <span className="mx-2">
          <select
            onChange={(event) => {
              resetDefaultPage(event.target.value)
            }}
            className="w-[50px] bg-lengsqrgray-200/10 text-[12px] p-1 rounded-sm outline-none cursor-pointer"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
              return (
                <option key={index + 'select'} value={10 * item}>
                  {10 * item}
                </option>
              )
            })}
          </select>
        </span>
        <span>out of 100</span>
      </div>

      <div className="sm:w-6/12 justify-end pages-inicate-container">

       { totalPage > 0 && <div className='w-full flex items-center justify-end pages-inicate-container'>
        <i onClick={()=>{ArrowmovePage('back')}}>
          <ArrowLeftIcon width="10" />
        </i>
        {Array.from({ length: totalPage>2 ? totalPage - 2 : totalPage } as any, () => 0).map(
          (item, index) => {
            return (
              <span
                onClick={() => {
                  splitpages(index + 1)
                }}
                className={`cursor-pointer  ${(index+1) == activePage ? 'font-extrabold opacity-100 text-[13px]':''}`}
                key={index + 'page'}
                id={(index + 1).toString()}
              >
                {index + 1}
              </span>
            )
          },
        )}

         {totalPage> 2 && <span>....</span>}
        
        {
         totalPage> 2 &&
          Array.from({ length: 2 } as any, () => 0).map((item, index) => {
            return (
              <span
                onClick={() => {
                  splitpages(totalPage - 2 + index + 1)
                }}
                className={`cursor-pointer  ${(totalPage - 2 + index + 1) == activePage ? 'font-extrabold opacity-100 text-[13px]':''}`}
                key={index + 'page'}
                id={(totalPage - 2 + index + 1).toString()}
              >
                {totalPage - 2 + index + 1}
              </span>
            )
          })
        }
        <i onClick={()=>{ArrowmovePage('next')}}>
          <ArrowRightIcon width="10" />
        </i>
      </div>
    }

    </div>

    </div>
  )
}

export default UserPagination
