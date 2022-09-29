import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../apiServises/api";
import { getCart, getCartDetails } from "../features/cart/cartSlice";
import { getUser } from "../features/user/userSlice";

const Checkout = () => {
  let user = useSelector(getUser);
  let cart = useSelector(getCart);
  let token = user?.api_token || user?.access_token;
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [contact, setContact] = useState(user?.contact);

  const [full_name, setFull_name] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address_line_1, setAddress_line_1] = useState("");
  const [address_line_2, setAddress_line_2] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip_code, setZip_code] = useState("");

  const request = {
    products: [],
    quantity: [],
    customer_id: user?.id,
    shipping_name: full_name,
    shipping_email: contact?.email,
    shipping_mobile: mobile,
    shipping_address_line_1: address_line_1,
    shipping_address_line_2: address_line_2,
    shipping_state: state,
    shipping_city: city,
    shipping_country: country,
    shipping_zip_code: zip_code,
    payment_status: true,
    cart_id: cart?.id,
  };

  let item = null;
  request.products = cart?.details?.map((prod, idx) => prod.variation.id);
  request.quantity = cart?.details?.map((prod, idx) => prod.quantity);
  console.log(request);

  useEffect(() => {
    if (contact) {
      setFull_name(contact.name || "");
      setMobile(contact.mobile || "");
      setAddress_line_1(contact.address_line_1 || "");
      setAddress_line_2(contact.address_line_2 || "");
      setCity(contact.city || "");
      setEmail(contact.email || "");
      setZip_code(contact.zip_code || "");
    }
  }, [, contact]);

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    var options = {
      key: "rzp_test_qMjKmEYqwFZuvC", // Enter the Key ID generated from the Dashboard
      name: "Pyzen Technologies",
      currency: "INR",
      amount: cart?.amount * 100,
      // order_id: cart?.cart[0].id.toString(),
      description: "Thankyou for shopping",
      image:
        "https://scontent.fvns2-1.fna.fbcdn.net/v/t1.6435-9/124065068_159700595868491_8907735804857102568_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=xyGTTOB2Q1gAX-ctUkW&_nc_ht=scontent.fvns2-1.fna&oh=00_AT8UdPAp-KJ6NWRiltK48IuzHf_Ej6f10UKU6cBUcARPzg&oe=626E883B",
      handler: async function (response) {
        // try using webhooks here
        console.log(request);
        alert(response.razorpay_payment_id);
        if (response.razorpay_payment_id) {
          const res = await api.post("/complete-order", request, {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log(res.data);
          if (res.data) {
            alert(res.data.message);
            dispatch(getCartDetails(token));
            navigate("/orders");
          }
        }
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: contact?.name,
        email: contact?.email,
        contact: contact?.mobile,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="site__body">
      <div className="block-header block-header--has-breadcrumb block-header--has-title">
        <div className="container">
          <div className="block-header__body">
            <nav
              className="breadcrumb block-header__breadcrumb"
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb__list">
                <li
                  className="breadcrumb__spaceship-safe-area"
                  role="presentation"
                />
                <li className="breadcrumb__item breadcrumb__item--parent breadcrumb__item--first">
                  <NavLink to="/" className="breadcrumb__item-link">
                    Home
                  </NavLink>
                </li>
                <li className="breadcrumb__item breadcrumb__item--parent">
                  <NavLink to="/cart" className="breadcrumb__item-link">
                    Cart
                  </NavLink>
                </li>
                <li
                  className="breadcrumb__item breadcrumb__item--current breadcrumb__item--last"
                  aria-current="page"
                >
                  <span className="breadcrumb__item-link">Current Page</span>
                </li>
                <li
                  className="breadcrumb__title-safe-area"
                  role="presentation"
                />
              </ol>
            </nav>
            <h1 className="block-header__title">
              {cart ? "Checkout" : "Youor Cart is Empty"}
            </h1>
          </div>
        </div>
      </div>
      {cart && (
        <>
          <div className="checkout block">
            <div className="container container--max--xl">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="card mb-lg-0">
                    <div className="card-body card-body--padding--2">
                      <h3 className="card-title">Shipping Details</h3>
                      <div className="form-group ">
                        <label htmlFor="checkout-full-name">Full Name</label>
                        <input
                          type="text"
                          required
                          className="form-control"
                          id="checkout-full-name"
                          placeholder="Full Name"
                          value={full_name}
                          onChange={(e) => {
                            setFull_name(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="checkout-street-address">
                          Street Address
                        </label>
                        <input
                          type="text"
                          required
                          className="form-control"
                          id="checkout-street-address"
                          placeholder="Street Address"
                          value={address_line_1}
                          onChange={(e) => {
                            setAddress_line_1(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="checkout-address">
                          Apartment, suite, unit etc.
                        </label>
                        <input
                          type="text"
                          required
                          className="form-control"
                          id="checkout-address"
                          value={address_line_2}
                          onChange={(e) => {
                            setAddress_line_2(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-row ">
                        <div className="form-group col -md-6">
                          <label htmlFor="checkout-city">Town / City</label>
                          <input
                            type="text"
                            required
                            className="form-control"
                            id="checkout-city"
                            value={city}
                            onChange={(e) => {
                              setCity(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="checkout-postcode">
                            Postcode / ZIP
                          </label>
                          <input
                            type="text"
                            required
                            className="form-control"
                            id="checkout-postcode"
                            value={zip_code}
                            onChange={(e) => {
                              setZip_code(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-row ">
                        <div className="form-group col-md-6">
                          <label htmlFor="checkout-country">Country</label>
                          <select
                            id="checkout-country"
                            required
                            className="form-control form-control-select2"
                            value={country}
                            onChange={(e) => {
                              setCountry(e.target.value);
                            }}
                          >
                            <option>Select a country...</option>
                            <option>India</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="checkout-state">State</label>
                          <select
                            id="checkout-state"
                            required
                            className="form-control form-control-select2"
                            value={state}
                            onChange={(e) => {
                              setState(e.target.value);
                            }}
                          >
                            <option>Select a state...</option>
                            <option>Delhi-NCR</option>
                            <option>Ghaziabad</option>
                            <option>Haryana</option>
                            <option>Uttar Pradesh</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="checkout-email">Email address</label>
                          <input
                            type="email"
                            required
                            className="form-control"
                            id="checkout-email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="checkout-phone">Phone</label>
                          <input
                            type="text"
                            required
                            className="form-control"
                            id="checkout-phone"
                            placeholder="Phone"
                            value={mobile}
                            onChange={(e) => {
                              setMobile(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-divider" />
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-5 mt-4 mt-lg-0">
                  <div className="card mb-0">
                    <div className="card-body card-body--padding--2">
                      <h3 className="card-title">Your Order</h3>
                      <table className="checkout__totals">
                        <thead className="checkout__totals-header">
                          <tr>
                            <th>Product</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody className="checkout__totals-products">
                          {cart?.details?.map((item, idx) => {
                            return (
                              <tr key={idx}>
                                <td>
                                  {item.product.name} × {item.quantity}
                                </td>
                                <td>&#x20B9;{item.amount}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                        <tbody className="checkout__totals-subtotals">
                          <tr>
                            <th>Subtotal</th>
                            <td>
                              &#x20B9; {parseFloat(cart?.amount).toFixed(2)}
                            </td>
                          </tr>
                          <tr>
                            <th>Shipping</th>
                            <td>&#x20B9; 0.00</td>
                          </tr>
                        </tbody>
                        <tfoot className="checkout__totals-footer">
                          <tr>
                            <th>Total</th>
                            <td>
                              {" "}
                              &#x20B9; {parseFloat(cart?.amount).toFixed(2)}
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                      <button
                        type="submit"
                        className="btn btn-primary btn-xl btn-block"
                        onClick={() => makePayment()}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="block-space block-space--layout--before-footer" />
    </div>
  );
};

export default Checkout;
