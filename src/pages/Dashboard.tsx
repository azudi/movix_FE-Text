import React from 'react'
import DashboardCardContainer from '../components/dashboard/DashboardCardContainer'
import DashboardTemplate from '../layouts/HomeLayout/DashboardTemplate'

interface Props {}

function Dashboard(props: Props) {
    const {} = props

    return (
        <DashboardTemplate>
            <section>
                <div>hello</div>
                <div>
                    <DashboardCardContainer/>
                </div>
            </section>
        </DashboardTemplate>
    )
}

export default Dashboard
