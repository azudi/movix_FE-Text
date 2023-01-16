import Footer from 'components/Footer';
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

function DashboardLayout(props: Props) {
    const {} = props

    return (
        <main className='dashboard-template'>
            <section className='bg-none'>
                {props.children}

                <Footer/>
            </section>
        </main>
    )
}

export default DashboardLayout
