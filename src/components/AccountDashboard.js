import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUser } from "../features/user/userSlice";
import AccountNavigation from "./AccountNavigation";
import Orders from "./Orders";

const AccountDashboard = () => {
  let user = useSelector(getUser);
  return (
    <div className="col-12 col-lg-9 mt-4 mt-lg-0">
      <div className="dashboard">
        <div className="dashboard__profile card profile-card">
          <div className="card-body profile-card__body">
            <div className="profile-card__avatar">
              <img
                src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png"
                alt=""
              />
            </div>
            <div className="profile-card__name">{user?.name}</div>
            <div className="profile-card__email">{user?.email}</div>
            <div className="profile-card__edit">
              <NavLink to="/edit-profile" className="btn btn-secondary btn-sm">
                Edit Profile
              </NavLink>
            </div>
          </div>
        </div>
        <div className="dashboard__address card address-card address-card--featured">
          <div className="address-card__badge tag-badge tag-badge--theme">
            Default
          </div>
          <div className="address-card__body">
            <div className="address-card__name">{user?.name}</div>
            <div className="address-card__row">
              {user?.contact?.address_line_1}
              <br />
              {user?.contact?.address_line_2}
              {", "} {user?.contact?.city}
              <br />
              {user?.contact?.state}
              {", "} {user?.contact?.zip_code}
              <br />
              {user?.contact?.country}
            </div>
            <div className="address-card__row">
              <div className="address-card__row-title">Phone Number</div>
              <div className="address-card__row-content">{user?.phone}</div>
            </div>
            <div className="address-card__row">
              <div className="address-card__row-title">Email Address</div>
              <div className="address-card__row-content">{user?.email}</div>
            </div>
            <div className="address-card__footer">
              <NavLink to="/edit-profile">Edit Address</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="card-divider" />
      <Orders />
    </div>
  );
};

export default AccountDashboard;
