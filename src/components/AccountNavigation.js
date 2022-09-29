import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { getCart } from '../features/cart/cartSlice';
import { getUser, logout } from '../features/user/userSlice'

const AccountNavigation = () => {
    let user = useSelector(getUser);
    let cart = useSelector(getCart);
    let token = user?.api_token || user?.access_token;
    const dispatch = useDispatch();
  
  return (
    <div className="col-12 col-lg-3 d-flex">
          <div className="account-nav flex-grow-1">
            <h4 className="account-nav__title">Navigation</h4>
            <ul className="account-nav__list">
              <li className="account-nav__item ">
                <NavLink to="/account">Dashboard</NavLink>
              </li>
              <li className="account-nav__item">
                <NavLink to="/edit-profile">Edit Profile</NavLink>
              </li>
              <li className="account-nav__item">
                <NavLink to="/orders">Order History</NavLink>
              </li>
              <li className="account-nav__item">
                <NavLink to="/order-details">Order Details</NavLink>
              </li>
              <li className="account-nav__item">
                <NavLink to="#">Password</NavLink>
              </li>
              <li className="account-nav__divider" role="presentation" />
              <li className="account-nav__item">
                <NavLink to="/" onClick={() => dispatch(logout(token))}

                >Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default AccountNavigation