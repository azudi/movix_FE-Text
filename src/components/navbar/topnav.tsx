import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { navRoutes } from './routes/topNavRoutes'
import { useSelector, useDispatch } from 'react-redux'
import { resetFixedState } from '../../redux/mutateUsers/users'
import { PaymentAction } from '../constant/paymentAction'
import { RootState } from '../../redux/store'
import { AlertDescription } from '@chakra-ui/react'

interface Props {}

const TopNav: React.FC<Props> = (props: Props) => {
  const {} = props
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation().pathname
  const DisplayUsers = useSelector((state: RootState) => state.toggle.Allusers)

  //Variable
  const [activeTab, setActiveTab] = useState('')

  useEffect(() => {
    let getLocation = location.substring(location.lastIndexOf('/') + 1)
    getLocation = getLocation == 'dashboard' ? '' : getLocation
    setActiveTab(getLocation)

    console.log(getLocation)

    dispatchRoute(getLocation)
  }, [])

  //Function
  const dispatchRoute = (val: string) => {
    dispatch(
      resetFixedState({
        action: val,
      }),
    )
  }
  const subRoutes = (val: number, route: string) => {
    setActiveTab(route)
    navigate(route)
    dispatchRoute(route)
    console.log(DisplayUsers)
  }
  return (
    <div className="top-nav-section">
      <h1>Table Heading</h1>
      <div className="top-nav-mid-section">
        <div className="nav-route-section">
          {navRoutes.map((item: any, index: number) => {
            return (
              <button
                onClick={() => {
                  subRoutes(index, item.route)
                }}
                className={`${activeTab === item.route ? 'active-tab' : ''}`}
              >
                {item.name}
              </button>
            )
          })}
        </div>
        <div className="nav-amount-section">
          Total payable amount:
          <span className="text-[17px]">
            <b className="text-[20px] text-scelloo-300"> $900.00 </b>
            USD
          </span>
        </div>
      </div>
    </div>
  )
}

export default TopNav
