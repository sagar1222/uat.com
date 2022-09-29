import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import api from "../apiServises/api";
import { getUser } from "../features/user/userSlice";

const Orders = () => {
    let user = useSelector(getUser);
    let token = user?.api_token || user?.access_token;

  const [orders, setOrders] = useState(null);
  useEffect(() => {
    const getAllOrder = async () => {
      const res = await api.get("/order-list", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(res.data.output.order);
    };
    getAllOrder();
  }, []);
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h5>{orders?orders.length > 0 ? "Order History" : "You have no Orders":<div className="block-header__title text-center"><h3>Loading...</h3>
            <button className="btn btn-light btn-loading btn-xl">
              <svg width="16" height="16">
                <path
                  d="M14,15h-4v-2h3v-3h2v4C15,14.6,14.6,15,14,15z M13,3h-3V1h4c0.6,0,1,0.4,1,1v4h-2V3z M6,3H3v3H1V2c0-0.6,0.4-1,1-1h4V3z
M3,13h3v2H2c-0.6,0-1-0.4-1-1v-4h2V13z"
                />
              </svg>
            </button>
          </div>}</h5>
        </div>
        <div className="card-divider" />
        {orders?.length > 0 && (
          <div
            className="card-table"
            style={{ overflowY: "scroll", height: "40vh" }}
          >
            <div className="table-responsive-sm">
              <table>
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orders
                    ?.slice()
                    .reverse()
                    .map((order, idx) => {
                      return (
                        <tr key={idx}>
                          <td>
                            <NavLink to="/order-details" state={{ id: `${order.id}` }}>#{order.id}</NavLink>
                          </td>
                          <td>{order.created_at.slice(0, 10)}</td>
                              <td>{ order?.shipping_status||'Order Placed'}</td>
                              <td>&#x20B9;{' '}{parseFloat(order.total_before_tax).toFixed(2)} for {order?.sell_lines?.length} item(s)</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
