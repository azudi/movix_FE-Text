import React from 'react';
import SideNav from '../../components/navbar/SideNav';
import Topnav from '../../components/navbar/topnav';

const DashboardTemplate = ({children} : any) => {
  return (
    <div>
        <Topnav/>

        <main className='flex flex-wrap h-[calc(100vh-80px)] lg:overflow-hidden'>
          <section className='w-[280px] h-full hide-scrollbar'>
             <SideNav/>
          </section>

            <section className='w-[calc(100%-280px)] bg-lengsqrgray-100 h-full overflow-auto'>
                {children}
            </section>
          </main>
    </div>
  )
}

export default DashboardTemplate