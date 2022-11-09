import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Users } from '../../redux/mutateUsers/users'
import { RootState } from '../../redux/store'
import { types } from '../constant/actionConstant'

interface Props {
  checkAllInput: Function
  unCheckAllInput: Function
}

function TableHeader(props: Props) {
  const { unCheckAllInput, checkAllInput } = props
  const dispatch = useDispatch()
  const DisplayUsers = useSelector(
    (state: RootState) => state.toggle.displayedUser,
  )
  const checkUser = useSelector((state: RootState) => state.toggle.checkedUsers)
  //FUNCTIONS
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      DisplayUsers.forEach((element) => {
        dispatch(Users({ user: element.id, action: types.ADD_USER }))
        checkAllInput()
      })
    } else {
      DisplayUsers.forEach((element) => {
        dispatch(Users({ id: element.id, action: types.REMOVE_USER }))
        unCheckAllInput()
      })
    }
    console.log(checkUser)
  }

  return (
    <div className="grid pb-2 bg-scelloo-50">
      <div className="item1  ml-4">
        <input
          type="checkbox"
          onChange={(event) => {
            onChangeInput(event)
          }}
          className="scale-[2] ml-4"
        ></input>
      </div>
      <div className="item2 text-scelloo-500 text-[15px] font-[600]">NAME</div>
      <div className="item3 text-scelloo-500 text-[15px] font-[600]">
        USER STATUS
      </div>
      <div className="item4 text-scelloo-500 text-[15px] font-[600]">
        PAYMENT STATUS
      </div>
      <div className="item5 text-scelloo-500 text-[15px] font-[600] text-right">
        AMOUNT
      </div>
    </div>
  )
}

export default TableHeader
