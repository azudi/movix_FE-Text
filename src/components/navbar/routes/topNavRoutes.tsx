import React from 'react'
import AllUsers from '../../all-user/allUsers'
import UnPaid from '../../un-paid/unPaid'
import OverDue from '../../over-due/overDue'
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
