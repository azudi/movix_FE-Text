import { bindActionCreators } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { mutateUsers } from '../redux/mutateUsers/users'
import { RootState } from '../redux/store'
import { types } from './constant/actionConstant'

interface Props {}

const Footer: React.FC = (props: Props) => {
  const {} = props
  const dispatch = useDispatch()
  const DisplayUsers = useSelector(
    (state: RootState) => state.toggle.displayedUser,
  )
  const AllUsers = useSelector((state: RootState) => state.toggle.Allusers)
  const [userRange, setUserRange] = useState(10)
  const [userRangeStart, setUserRangeStart] = useState(0)
  const [maxPage, setMaxPage] = useState(0)
  const [page, setPage] = useState(0)

  //HOOks

  useEffect(() => {
    checkMaxPage()
    mutateDisplayUser()
  }, [page, AllUsers, userRange])

  //FUNCTIONS
  const mutateDisplayUser = () => {
    dispatch(
      mutateUsers({
        action: types.RANGE_USER,
        start: userRangeStart + page * userRange,
        end: userRange + page * userRange,
      }),
    )
  }
  const setUserRangeStartFunc = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setUserRange(Number(event.target.value))
    mutateDisplayUser()
  }

  const checkMaxPage = () => {
    let dividedWholePage = Math.floor(AllUsers.length / userRange)
    let dividedFracPage =
      AllUsers.length % userRange > 0 ? dividedWholePage + 1 : dividedWholePage
    setMaxPage(dividedFracPage)
  }
  const setNextPage = (): void => {
    if (page >= maxPage - 1) return
    let getPage = page
    setPage(getPage + 1)
    mutateDisplayUser()
  }
  const setPrevPage = (): void => {
    if (page == 0) return
    let getPage = page
    setPage(getPage - 1)
    mutateDisplayUser()
  }

  return (
    <div className="flex justify-end items-center text-[500] py-2">
      <div className="text-[13px]">
        Rows per page:{' '}
        <select
          onChange={(event) => {
            setUserRangeStartFunc(event)
          }}
          className="bg-transparent outline-none"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="40">40</option>
        </select>
      </div>
      <div className="text-[13px] px-10">
        {userRangeStart + page * userRange + 1}-
        {AllUsers.length > userRange + page * userRange
          ? userRange + page * userRange
          : AllUsers.length}{' '}
        of {AllUsers.length}
      </div>

      <div className="flex items-center">
        <span
          onClick={setPrevPage}
          className="inline-block mr-6 cursor-pointer"
        >
          <MdArrowBackIosNew />
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span
          onClick={setNextPage}
          className="inline-block mr-6 cursor-pointer"
        >
          <MdArrowForwardIos />
        </span>
      </div>
    </div>
  )
}

export default Footer
