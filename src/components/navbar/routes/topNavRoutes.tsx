import React from 'react'
import AllUsers from '../../all-user/AllUsers'
import UnPaid from '../../un-paid/UnPaid'
import OverDue from '../../over-due/OverDue'
import PaidSection from '../../paid/paidSection'

 export const navRoutes = [
    {
        name: 'All',
        route: '',
        Page: AllUsers
      },
      {
        name: 'Paid',
        route: 'paid',
        Page: PaidSection
      },
      {
        name: 'Unpaid',
        route: "unpaid",
        Page: UnPaid
      },
      {
        name: 'Overdue',
        route: "overdue",
        Page: OverDue
      },
 ]
