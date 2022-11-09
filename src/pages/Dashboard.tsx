import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import TopNav from "../components/navbar/TopNav"
import DashboardLayout from '../layouts/DashboardLayout'
import { navRoutes } from '../components/navbar/routes/topNavRoutes'
import TopSearch from '../components/search-strip/TopSearch'
import Footer from '../components/footer'
import axios from 'axios'
import { useQuery } from 'react-query'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { fixedState, mutateAllSAtate } from '../redux/mutateUsers/users'
import Loader from '../components/widget/loader'
import { setParams } from '../services/query-hooks/settings'

interface Props {}

function Dashboard(props: Props) {
  const {} = props
  const dispatch = useDispatch()
  const DisplayUsers = useSelector((state: RootState) => state.toggle.Allusers)

  const { isLoading, error, data, refetch } = useQuery(
    'userData',
    async () =>
      await axios
        .get(`${setParams.BASE_URL}/users/9tsBKq00fum5E8f`)
        .then((res) => {
          const data = res.data.data

          dispatch(
            mutateAllSAtate({
              allUsers: data,
            }),
          )
          dispatch(
            fixedState({
              fixedUsers: data,
            }),
          )
          console.log(DisplayUsers)
        }),
  )


    const LongestWord=(sentence : string)=>{
      
  }

  //Hooks
  useEffect(() => {}, [])

  if (isLoading) return <Loader width={150} />

  return (
    <DashboardLayout>
      <div>

        <TopNav />
        <section className="bg-white mt-6 rounded-xl py-4 ">
          <TopSearch refresh={refetch}/>
          <Routes>
            {navRoutes.map((item: any, index: number) => {
              const { Page, route } = item
              return <Route path={route} element={<Page refresh={refetch}/>} />
            })
            }
            {/*  */}
          </Routes>
        </section>
        <Footer />

      </div>
    </DashboardLayout>
  )
}

export default Dashboard
