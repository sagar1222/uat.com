import React from 'react'
import AccountNavigation from '../components/AccountNavigation'
import Orders from '../components/Orders'

const OrderHistory = () => {
  return (
    <div className="site__body">
  <div className="block-space block-space--layout--after-header" />
  <div className="block">
    <div className="container container--max--xl">
      <div className="row">
        <AccountNavigation/>
        <div className="col-12 col-lg-9 mt-4 mt-lg-0">
            <Orders/>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default OrderHistory;