import React, { useRef, useState } from 'react'
import { ReactComponent as TFilter } from '../../assets/images/svg/filter.svg'
import { ReactComponent as TSearch } from '../../assets/images/svg/Search.svg'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavItem,
} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
} from '@chakra-ui/react'
import {
  searchUsers,
  sortUsers,
  stateResetStaus,
} from '../../redux/mutateUsers/users'
import axios from 'axios'
import { setParams } from '../../services/query-hooks/settings'
import SmallLoader from '../widget/SmallLoader'

interface Props {
  refresh: Function
}

const TopSearch:React.FC<Props> = (props: Props) => {
  const { refresh } = props
  const dispatch = useDispatch()
  const checkUsers = useSelector(
    (state: RootState) => state.toggle.checkedUsers,
  )
  const search = useRef<any>()

  //VARIABLES
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeUser, setActiveUser] = useState('')
  const [isPaying, setIspaying] = useState(false)
  const [filter, setFilter] = useState({
    sortBy: [
      { type: 'Default', searchProp: 'all' },
      { type: 'First Name', searchProp: 'firstname' },
      { type: 'Last Name', searchProp: 'lastname' },
      { type: 'Due Date', searchProp: 'duedate' },
      { type: 'Last Login', searchProp: 'lastlogin' },
    ],
    users: [
      { type: 'All', searchProp: '' },
      { type: 'Active', searchProp: 'active' },
      { type: 'Inactive', searchProp: 'inactive' },
    ],
  })

  //FUNCTIONS
  const getFilterValue = (val: string) => {
    setActiveFilter(val)
    dispatch(
      sortUsers({
        sort: val,
      }),
    )
  }
  const getFilterUser = (val: string) => {
    dispatch(
      stateResetStaus({
        action: val,
      }),
    )
    setActiveUser(val)
  }

  const searchUser = (action: string, val: string) => {
    dispatch(
      searchUsers({
        search: action,
        val,
      }),
    )
  }

  const searchInput = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    let val = search.current.value

    if (val.includes('-')) {
      searchUser('lastLogin', val)
    } else if (val.includes('@')) {
      searchUser('email', val)
    } else searchUser('firstname', val)
  }

  const payAll = async () => {
    if(checkUsers.length < 1 || isPaying) return
    setIspaying(true)
      checkUsers.forEach(async (element: number, index: number) => {
        await axios.patch(`${setParams.BASE_URL}/mark-paid/${element}`).
        then(async ()=>{
          if(index == checkUsers.length-1){
            await refresh()
            setIspaying(false)
          }
        })
      })
    }

  return (
    <div className="px-6 pb-3 flex flex-wrap items-center w-full relative">
      <Menu closeOnSelect={true}>
        <MenuButton as={Button} bgColor="transparent" px={0} py={0}>
          <div className="filter-box py-2">
            <TFilter />
            &nbsp;&nbsp;Filter
          </div>
        </MenuButton>
        <MenuList minWidth="240px">
          <MenuOptionGroup
            defaultValue="all"
            title="SORT BY:"
            color={'rgba(0,0,0,0.5)'}
            type="radio"
            onChange={(value: any) => {
              getFilterValue(value)
            }}
          >
            {filter.sortBy.map((item: any, index: number) => {
              return (
                <MenuItemOption value={item.searchProp}>
                  <span className="filter-item">
                    <abbr> {item.type}</abbr>
                    <input
                      type="radio"
                      checked={activeFilter == item.searchProp ? true : false}
                    />
                  </span>
                </MenuItemOption>
              )
            })}
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup
            defaultValue="email"
            title="USERS:"
            color={'rgba(0,0,0,0.5)'}
            type="radio"
            onChange={(value: any) => {
              getFilterUser(value)
            }}
          >
            {filter.users.map((item: any, index: number) => {
              return (
                <MenuItemOption value={item.searchProp}>
                  <span className="filter-item">
                    <abbr> {item.type}</abbr>
                    <input
                      type="radio"
                      checked={activeUser == item.searchProp ? true : false}
                    />
                  </span>
                </MenuItemOption>
              )
            })}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <form onSubmit={searchInput} className="search-form">
        <TSearch />
        <input
          ref={search}
          className="ml-3"
          placeholder="Search Users by Name, Email or Date"
          type="search"
        ></input>
      </form>
      <div
        className="pay-dues cursor-pointer"
        onClick={()=>{payAll()}}
      >
       {isPaying ? "•••" : "pay Dues"}
      </div>
    </div>
  )
}

export default TopSearch
