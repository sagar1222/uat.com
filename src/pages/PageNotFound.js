import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="site__body">
  <div className="block-space block-space--layout--spaceship-ledge-height" />
  <div className="block">
    <div className="container">
      <div className="not-found">
        <div className="not-found__404">Oops! Error 404</div>
        <div className="not-found__content">
          <h1 className="not-found__title">Page Not Found</h1>
          <p className="not-found__text">
            We can't seem to find the page you're looking for.<br />Try to
            use the search.
          </p>
          <p className="not-found__text">
            Or go to the home page to start over.
          </p>
          <NavLink className="btn btn-secondary btn-sm" to="/">Go To Home Page</NavLink>
        </div>
      </div>
    </div>
  </div>
  <div className="block-space block-space--layout--before-footer" />
</div>

  )
}

export default PageNotFound