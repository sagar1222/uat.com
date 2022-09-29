import React from 'react'
import AccountDashboard from '../components/AccountDashboard'
import AccountNavigation from '../components/AccountNavigation'

const Account = () => {
  return (
    <div className="site__body">
  <div className="block-space block-space--layout--after-header" />
  <div className="block">
    <div className="container container--max--xl">
      <div className="row">
        <AccountNavigation/>
        <AccountDashboard/>
      </div>
    </div>
  </div>
  {/* <div className="block-space block-space--layout--before-footer" /> */}
</div>
  )
}

export default Account