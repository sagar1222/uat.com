import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteFromCart, getCart } from "../features/cart/cartSlice";
import { getUser } from "../features/user/userSlice";

const Cart = () => {
  let user = useSelector(getUser);
  let cart = useSelector(getCart);
  let token = user?.api_token || user?.access_token;
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteFromCart({ token, id }));
  };
  console.log(cart);

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
                  className="breadcrumb__title-safe-area"
                  role="presentation"
                />
              </ol>
            </nav>
            <h1 className="block-header__title">
              {user ? cart? "Shopping Cart":(<> Your Cart is Empty<br/><NavLink
                              className="btn btn-sm btn-primary"
                              to="/shop"
                            >
                              Continue Shopping...
                            </NavLink></>) : "Please Login"}
            </h1>
          </div>
        </div>
      </div>
      {cart?.details && (
        <div className="block">
          <div className="container">
            <div className="cart">
              <div className="cart__table cart-table">
                <table className="cart-table__table">
                  <thead className="cart-table__head">
                    <tr className="cart-table__row">
                      <th className="cart-table__column cart-table__column--image">
                        Image
                      </th>
                      <th className="cart-table__column cart-table__column--product">
                        Product
                      </th>
                      <th className="cart-table__column cart-table__column--price">
                        Price
                      </th>
                      <th className="cart-table__column cart-table__column--quantity">
                        Quantity
                      </th>
                      <th className="cart-table__column cart-table__column--total">
                        Total
                      </th>
                      <th className="cart-table__column cart-table__column--remove" />
                    </tr>
                  </thead>
                  <tbody className="cart-table__body">
                    {cart?.details?.map((item, idx) => {
                      return (
                        <tr className="cart-table__row" key={idx}>
                          <td className="cart-table__column cart-table__column--image">
                            <div className="image image--type--product">
                              <a
                                href="product-full.html"
                                className="image__body"
                              >
                                <img
                                  className="image__tag"
                                  src={
                                    item.image
                                      ? item.image
                                      : "https://banner2.cleanpng.com/20180605/wzl/kisspng-computer-icons-image-file-formats-no-image-5b16ff0d4b81e2.4246835515282337413093.jpg"
                                  }
                                />
                              </a>
                            </div>
                          </td>
                          <td className="cart-table__column cart-table__column--product">
                            <a href="#" className="cart-table__product-name">
                              {item.product.name}
                            </a>
                          </td>
                          <td
                            className="cart-table__column cart-table__column--price"
                            data-title="Price"
                          >
                            &#x20B9;{" "}
                            {parseFloat(
                              item.variation.sell_price_inc_tax
                            ).toFixed(2)}
                          </td>
                          <td
                            className="cart-table__column cart-table__column--quantity"
                            data-title="Quantity"
                          >
                            <div className="cart-table__quantity input-number">
                              <input
                                className="form-control input-number__input"
                                type="number"
                                min={1}
                                defaultValue={item.quantity}
                              />
                              <div className="input-number__add" />
                              <div className="input-number__sub" />
                            </div>
                          </td>
                          <td
                            className="cart-table__column cart-table__column--total"
                            data-title="Total"
                          >
                            &#x20B9; {item.amount}
                          </td>
                          <td className="cart-table__column cart-table__column--remove">
                            <button
                              type="button"
                              onClick={() => deleteHandler(item.id)}
                              className="cart-table__remove btn btn-sm btn-icon btn-muted"
                            >
                              <svg width={12} height={12}>
                                <path
                                  d="M10.8,10.8L10.8,10.8c-0.4,0.4-1,0.4-1.4,0L6,7.4l-3.4,3.4c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L4.6,6L1.2,2.6
        c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L6,4.6l3.4-3.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L7.4,6l3.4,3.4
        C11.2,9.8,11.2,10.4,10.8,10.8z"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot className="cart-table__foot">
                    <tr>
                      <td colSpan={6}>
                        <div className="cart-table__actions">
                          <form className="cart-table__coupon-form form-row">
                            <div className="form-group mb-0 col flex-grow-1">
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Coupon Code"
                              />
                            </div>
                            <div className="form-group mb-0 col-auto">
                              <button
                                type="button"
                                className="btn btn-sm btn-primary"
                              >
                                Apply Coupon
                              </button>
                            </div>
                          </form>
                          <div className="cart-table__update-button">
                            <NavLink
                              className="btn btn-sm btn-primary"
                              to="/shop"
                            >
                              Continue Shopping...
                            </NavLink>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="cart__totals">
                <div className="card">
                  <div className="card-body card-body--padding--2">
                    <h3 className="card-title">Cart Totals</h3>
                    <table className="cart__totals-table">
                      <thead>
                        <tr>
                          <th>Subtotal</th>
                          <td>
                            {" "}
                            &#x20B9; {parseFloat(cart?.amount).toFixed(2)}
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Shipping</th>
                          <td>&#x20B9; 0.00</td>
                        </tr>
                        <tr>
                          <th>Tax</th>
                          <td> &#x20B9; 0.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>Total</th>
                          <td>
                            {" "}
                            &#x20B9; {parseFloat(cart?.amount).toFixed(2)}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                    <NavLink
                      className="btn btn-primary btn-xl btn-block"
                      to="/checkout"
                    >
                      Proceed to checkout
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="block-space block-space--layout--before-footer" />
    </div>
  );
};

export default Cart;
