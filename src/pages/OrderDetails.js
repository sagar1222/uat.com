import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import api from "../apiServises/api";
import AccountNavigation from "../components/AccountNavigation";
import Orders from "../components/Orders";
import { getUser } from "../features/user/userSlice";

const OrderDetails = () => {
  const user = useSelector(getUser);
  let token = user?.api_token || user?.access_token;

  const location = useLocation();
  const ord_id = location.state;
  const [orderDetails, setOrderDetails] = useState(null);
  useEffect(() => {
    console.log(ord_id);
    const getOrderDetails = async () => {
      const res = await api.get(`/order-detail`, {
        params: { order_id: ord_id?.id },
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrderDetails(res.data.output.order[0]);
    };
    getOrderDetails();
  }, []);
  let add = orderDetails?.shipping_add;
  return (
    <div className="site__body">
      <div className="block-space block-space--layout--after-header" />
      <div className="block">
        <div className="container container--max--xl">
          <div className="row">
            <AccountNavigation />
            <div className="col-12 col-lg-9 mt-4 mt-lg-0">
              {location.state ? (
                <div>
                  <div className="card">
                    <div className="order-header">
                      <div className="order-header__actions">
                        <NavLink
                          to="/orders"
                          className="btn btn-xs btn-secondary"
                        >
                          Back to list
                        </NavLink>
                      </div>
                      <h5 className="order-header__title">
                        Order #{orderDetails?.id}
                      </h5>
                      <div className="order-header__subtitle">
                        Was placed on{" "}
                        <mark>{orderDetails?.created_at.slice(0, 10)}</mark> and
                        is currently
                        <mark>
                          {orderDetails?.shipping_status || " Pending"}
                        </mark>
                        .
                      </div>
                    </div>
                    <div className="card-divider" />
                    <div className="card-table">
                      <div className="table-responsive-sm">
                        <table>
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody className="card-table__body card-table__body--merge-rows">
                            {orderDetails?.sell_lines?.map((prod, idx) => {
                                return (
                              <tr key={idx}>
                                <td>
                                  {parseFloat(prod.unit_price).toFixed(2)}{' '} x{" "}
                                  {prod.quantity}
                                </td>
                                <td>
                                  &#x20B9;
                                  {parseFloat(prod.quantity * prod.unit_price).toFixed(2)}{" "}
                                </td>
                              </tr>);
                            })}
                          </tbody>
                          <tbody className="card-table__body card-table__body--merge-rows">
                            <tr>
                              <th>Subtotal</th>
                              <td>&#x20B9;{orderDetails?.final_total}</td>
                            </tr>
                            <tr>
                              <th>Shipping</th>
                              <td>&#x20B9;{' '}0.00</td>
                            </tr>
                            <tr>
                              <th>Tax</th>
                              <td>&#x20B9;{' '}0.00</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th>Total</th>
                              <td>&#x20B9;{orderDetails?.final_total}</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3 no-gutters mx-n2">
                    <div className="col-sm-6 col-12 px-2">
                      <div className="card address-card address-card--featured">
                        <div className="address-card__badge tag-badge tag-badge--theme">
                          Shipping Address
                        </div>
                        <div className="address-card__body">
                          <div className="address-card__name">{add?.name}</div>
                          <div className="address-card__row">
                          {add?.address_line_1}
                            <br />
                            {add?.address_line_2}{', '}{add?.city}
                            <br />
                            {add?.state}{', '}{add?.zipcode}
                            <br />
                            {add?.country}
                          </div>
                          <div className="address-card__row">
                            <div className="address-card__row-title">
                              Phone Number
                            </div>
                            <div className="address-card__row-content">
                              {add?.mobile}
                            </div>
                          </div>
                          <div className="address-card__row">
                            <div className="address-card__row-title">
                              Email Address
                            </div>
                            <div className="address-card__row-content">
                            {add?.email}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-12 px-2 mt-sm-0 mt-3">
                      <div className="card address-card address-card--featured">
                        <div className="address-card__badge tag-badge tag-badge--theme">
                          Billing Address
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
                            <div className="address-card__row-title">
                              Phone Number
                            </div>
                            <div className="address-card__row-content">
                              {user?.phone}
                            </div>
                          </div>
                          <div className="address-card__row">
                            <div className="address-card__row-title">
                              Email Address
                            </div>
                            <div className="address-card__row-content">
                              {user?.email}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Orders />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
