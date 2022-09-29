import React from 'react'
import { NavLink } from 'react-router-dom'

const MobileMenu = () => {
  return (
    <div>
        {/* mobile-menu */}
        <div className="mobile-menu">
          <div className="mobile-menu__backdrop" />
          <div className="mobile-menu__body">
            <button className="mobile-menu__close" type="button">
              <svg width={12} height={12}>
                <path
                  d="M10.8,10.8L10.8,10.8c-0.4,0.4-1,0.4-1.4,0L6,7.4l-3.4,3.4c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L4.6,6L1.2,2.6
	c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L6,4.6l3.4-3.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L7.4,6l3.4,3.4
	C11.2,9.8,11.2,10.4,10.8,10.8z"
                />
              </svg>
            </button>
            <div className="mobile-menu__panel">
              <div className="mobile-menu__panel-header">
                <div className="mobile-menu__panel-title">Menu</div>
              </div>
              <div className="mobile-menu__panel-body">
                <div className="mobile-menu__divider" />
                <div className="mobile-menu__indicators">
                  <a className="mobile-menu__indicator" href="wishlist.html">
                    <span className="mobile-menu__indicator-icon">
                      <svg width={20} height={20}>
                        <path
                          d="M14,3c2.2,0,4,1.8,4,4c0,4-5.2,10-8,10S2,11,2,7c0-2.2,1.8-4,4-4c1,0,1.9,0.4,2.7,1L10,5.2L11.3,4C12.1,3.4,13,3,14,3 M14,1
	c-1.5,0-2.9,0.6-4,1.5C8.9,1.6,7.5,1,6,1C2.7,1,0,3.7,0,7c0,5,6,12,10,12s10-7,10-12C20,3.7,17.3,1,14,1L14,1z"
                        />
                      </svg>{" "}
                    </span>
                    <span className="mobile-menu__indicator-title">
                      Wishlist
                    </span>{" "}
                  </a>
                  <a
                    className="mobile-menu__indicator"
                    href="account-dashboard.html"
                  >
                    <span className="mobile-menu__indicator-icon">
                      <svg width={20} height={20}>
                        <path
                          d="M20,20h-2c0-4.4-3.6-8-8-8s-8,3.6-8,8H0c0-4.2,2.6-7.8,6.3-9.3C4.9,9.6,4,7.9,4,6c0-3.3,2.7-6,6-6s6,2.7,6,6
	c0,1.9-0.9,3.6-2.3,4.7C17.4,12.2,20,15.8,20,20z M14,6c0-2.2-1.8-4-4-4S6,3.8,6,6s1.8,4,4,4S14,8.2,14,6z"
                        />
                      </svg>{" "}
                    </span>
                    <span className="mobile-menu__indicator-title">
                      Account
                    </span>{" "}
                  </a>
                  <a className="mobile-menu__indicator" href="cart.html">
                    <span className="mobile-menu__indicator-icon">
                      <svg width={20} height={20}>
                        <circle cx={7} cy={17} r={2} />
                        <circle cx={15} cy={17} r={2} />
                        <path
                          d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
	V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
	C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"
                        />
                      </svg>
                      <span className="mobile-menu__indicator-counter">3</span>{" "}
                    </span>
                    <span className="mobile-menu__indicator-title">Cart</span>{" "}
                  </a>
                  <a
                    className="mobile-menu__indicator"
                    href="account-garage.html"
                  >
                    <span className="mobile-menu__indicator-icon">
                      <svg width={20} height={20}>
                        <path
                          d="M6.6,2c2,0,4.8,0,6.8,0c1,0,2.9,0.8,3.6,2.2C17.7,5.7,17.9,7,18.4,7C20,7,20,8,20,8v1h-1v7.5c0,0.8-0.7,1.5-1.5,1.5h-1
	c-0.8,0-1.5-0.7-1.5-1.5V16H5v0.5C5,17.3,4.3,18,3.5,18h-1C1.7,18,1,17.3,1,16.5V16V9H0V8c0,0,0.1-1,1.6-1C2.1,7,2.3,5.7,3,4.2
	C3.7,2.8,5.6,2,6.6,2z M13.3,4H6.7c-0.8,0-1.4,0-2,0.7c-0.5,0.6-0.8,1.5-1,2C3.6,7.1,3.5,7.9,3.7,8C4.5,8.4,6.1,9,10,9
	c4,0,5.4-0.6,6.3-1c0.2-0.1,0.2-0.8,0-1.2c-0.2-0.4-0.5-1.5-1-2C14.7,4,14.1,4,13.3,4z M4,10c-0.4-0.3-1.5-0.5-2,0
	c-0.4,0.4-0.4,1.6,0,2c0.5,0.5,4,0.4,4,0C6,11.2,4.5,10.3,4,10z M14,12c0,0.4,3.5,0.5,4,0c0.4-0.4,0.4-1.6,0-2c-0.5-0.5-1.3-0.3-2,0
	C15.5,10.2,14,11.3,14,12z"
                        />
                      </svg>{" "}
                    </span>
                    <span className="mobile-menu__indicator-title">Garage</span>
                  </a>
                </div>
                <div className="mobile-menu__divider" />
                <ul className="mobile-menu__links">
                  <li className= "data-mobile-menu-item">
                    <NavLink to="/" data-mobile-menu-trigger>
                      Home
                      <svg width={7} height={11}>
                        <path
                          d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
	C-0.1,9.8-0.1,10.4,0.3,10.7z"
                        />
                      </svg>
                    </NavLink>
                  </li>
                  <li data-mobile-menu-item>
                    <NavLink
                      to="/shop"
                      data-mobile-menu-trigger
                    >
                      Shop
                      <svg width={7} height={11}>
                        <path
                          d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
	C-0.1,9.8-0.1,10.4,0.3,10.7z"
                        />
                      </svg>
                    </NavLink>
                  </li>
                  <li data-mobile-menu-item>
                    <a
                      href="account-login.html"
                      data-mobile-menu-trigger
                    >
                      Account
                      <svg width={7} height={11}>
                        <path
                          d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
	C-0.1,9.8-0.1,10.4,0.3,10.7z"
                        />
                      </svg>
                    </a>
                    <div
                      className="mobile-menu__links-panel"
                      data-mobile-menu-panel
                    >
                      <div className="mobile-menu__panel mobile-menu__panel--hidden">
                        <div className="mobile-menu__panel-header">
                          <button
                            className="mobile-menu__panel-back"
                            type="button"
                          >
                            <svg width={7} height={11}>
                              <path d="M6.7,0.3L6.7,0.3c-0.4-0.4-0.9-0.4-1.3,0L0,5.5l5.4,5.2c0.4,0.4,0.9,0.3,1.3,0l0,0c0.4-0.4,0.4-1,0-1.3l-4-3.9l4-3.9C7.1,1.2,7.1,0.6,6.7,0.3z" />
                            </svg>
                          </button>
                          <div className="mobile-menu__panel-title">
                            Account
                          </div>
                        </div>
                        <div className="mobile-menu__panel-body">
                          <ul className="mobile-menu__links">
                            <li data-mobile-menu-item>
                              <a
                                href="account-login.html"
                                data-mobile-menu-trigger
                              >
                                Login &amp; Register
                              </a>
                            </li>
                            <li data-mobile-menu-item>
                              <a
                                href="account-dashboard.html"
                                data-mobile-menu-trigger
                              >
                                Dashboard
                              </a>
                            </li>
                            <li data-mobile-menu-item>
                              <a
                                href="account-garage.html"
                                data-mobile-menu-trigger
                              >
                                Garage
                              </a>
                            </li>
                            <li data-mobile-menu-item>
                              <a
                                href="account-profile.html"
                                data-mobile-menu-trigger
                              >
                                Edit Profile
                              </a>
                            </li>
                            <li data-mobile-menu-item>
                              <a
                                href="account-orders.html"
                                data-mobile-menu-trigger
                              >
                                Order History
                              </a>
                            </li>
                            <li data-mobile-menu-item>
                              <a
                                href="account-order-details.html"
                                data-mobile-menu-trigger
                              >
                                Order Details
                              </a>
                            </li>
                            <li data-mobile-menu-item>
                              <a
                                href="account-addresses.html"
                                data-mobile-menu-trigger
                              >
                                Address Book
                              </a>
                            </li>
                            <li data-mobile-menu-item>
                              <a
                                href="account-edit-address.html"
                                data-mobile-menu-trigger
                              >
                                Edit Address
                              </a>
                            </li>
                            <li data-mobile-menu-item>
                              <a
                                href="account-password.html"
                                data-mobile-menu-trigger
                              >
                                Change Password
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="mobile-menu__spring" />
                <div className="mobile-menu__divider" />
                <a className="mobile-menu__contacts" href="#">
                  <div className="mobile-menu__contacts-subtitle">
                    Free call 24/7
                  </div>
                  <div className="mobile-menu__contacts-title">
                    800 060-0730
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* mobile-menu / end */}
        {/* quickview-modal */}
        <div
          id="quickview-modal"
          className="modal fade"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        />
        {/* quickview-modal / end */}
        {/* add-vehicle-modal */}
        <div
          id="add-vehicle-modal"
          className="modal fade"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="vehicle-picker-modal modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <button type="button" className="vehicle-picker-modal__close">
                <svg width={12} height={12}>
                  <path
                    d="M10.8,10.8L10.8,10.8c-0.4,0.4-1,0.4-1.4,0L6,7.4l-3.4,3.4c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L4.6,6L1.2,2.6
	c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L6,4.6l3.4-3.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L7.4,6l3.4,3.4
	C11.2,9.8,11.2,10.4,10.8,10.8z"
                  />
                </svg>
              </button>
              <div className="vehicle-picker-modal__panel vehicle-picker-modal__panel--active">
                <div className="vehicle-picker-modal__title card-title">
                  Add A Vehicle
                </div>
                <div className="vehicle-form vehicle-form--layout--modal">
                  <div className="vehicle-form__item vehicle-form__item--select">
                    <select
                      className="form-control form-control-select2"
                      aria-label="Year"
                    >
                      <option value="none">Select Year</option>
                      <option>2010</option>
                      <option>2011</option>
                      <option>2012</option>
                      <option>2013</option>
                      <option>2014</option>
                      <option>2015</option>
                      <option>2016</option>
                      <option>2017</option>
                      <option>2018</option>
                      <option>2019</option>
                      <option>2020</option>
                    </select>
                  </div>
                  <div className="vehicle-form__item vehicle-form__item--select">
                    <select
                      className="form-control form-control-select2"
                      aria-label="Brand"
                      disabled="disabled"
                    >
                      <option value="none">Select Brand</option>
                      <option>Audi</option>
                      <option>BMW</option>
                      <option>Ferrari</option>
                      <option>Ford</option>
                      <option>KIA</option>
                      <option>Nissan</option>
                      <option>Tesla</option>
                      <option>Toyota</option>
                    </select>
                  </div>
                  <div className="vehicle-form__item vehicle-form__item--select">
                    <select
                      className="form-control form-control-select2"
                      aria-label="Model"
                      disabled="disabled"
                    >
                      <option value="none">Select Model</option>
                      <option>Explorer</option>
                      <option>Focus S</option>
                      <option>Fusion SE</option>
                      <option>Mustang</option>
                    </select>
                  </div>
                  <div className="vehicle-form__item vehicle-form__item--select">
                    <select
                      className="form-control form-control-select2"
                      aria-label="Engine"
                      disabled="disabled"
                    >
                      <option value="none">Select Engine</option>
                      <option>Gas 1.6L 125 hp AT/L4</option>
                      <option>Diesel 2.5L 200 hp AT/L5</option>
                      <option>Diesel 3.0L 250 hp MT/L5</option>
                    </select>
                  </div>
                  <div className="vehicle-form__divider">Or</div>
                  <div className="vehicle-form__item">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter VIN number"
                      aria-label="VIN number"
                    />
                  </div>
                </div>
                <div className="vehicle-picker-modal__actions">
                  <button
                    type="button"
                    className="btn btn-sm btn-secondary vehicle-picker-modal__close-button"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-sm btn-primary">
                    Add A Vehicle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* add-vehicle-modal / end */}
        {/* vehicle-picker-modal */}
        <div
          id="vehicle-picker-modal"
          className="modal fade"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="vehicle-picker-modal modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <button type="button" className="vehicle-picker-modal__close">
                <svg width={12} height={12}>
                  <path
                    d="M10.8,10.8L10.8,10.8c-0.4,0.4-1,0.4-1.4,0L6,7.4l-3.4,3.4c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L4.6,6L1.2,2.6
	c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L6,4.6l3.4-3.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L7.4,6l3.4,3.4
	C11.2,9.8,11.2,10.4,10.8,10.8z"
                  />
                </svg>
              </button>
              <div
                className="vehicle-picker-modal__panel vehicle-picker-modal__panel--active"
                data-panel="list"
              >
                <div className="vehicle-picker-modal__title card-title">
                  Select Vehicle
                </div>
                <div className="vehicle-picker-modal__text">
                  Select a vehicle to find exact fit parts
                </div>
                <div className="vehicles-list">
                  <div className="vehicles-list__body">
                    <label className="vehicles-list__item">
                      <span className="vehicles-list__item-radio input-radio">
                        <span className="input-radio__body">
                          <input
                            className="input-radio__input"
                            name="header-vehicle"
                            type="radio"
                          />
                          <span className="input-radio__circle" />{" "}
                        </span>
                      </span>
                      <span className="vehicles-list__item-info">
                        <span className="vehicles-list__item-name">
                          2011 Ford Focus S
                        </span>
                        <span className="vehicles-list__item-details">
                          Engine 2.0L 1742DA L4 FI Turbo
                        </span>{" "}
                      </span>
                      <button
                        type="button"
                        className="vehicles-list__item-remove"
                      >
                        <svg width={16} height={16}>
                          <path d="M2,4V2h3V1h6v1h3v2H2z M13,13c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V5h10V13z" />
                        </svg>
                      </button>
                    </label>
                    <label className="vehicles-list__item">
                      <span className="vehicles-list__item-radio input-radio">
                        <span className="input-radio__body">
                          <input
                            className="input-radio__input"
                            name="header-vehicle"
                            type="radio"
                          />
                          <span className="input-radio__circle" />{" "}
                        </span>
                      </span>
                      <span className="vehicles-list__item-info">
                        <span className="vehicles-list__item-name">
                          2019 Audi Q7 Premium
                        </span>
                        <span className="vehicles-list__item-details">
                          Engine 3.0L 5626CC L6 QK
                        </span>{" "}
                      </span>
                      <button
                        type="button"
                        className="vehicles-list__item-remove"
                      >
                        <svg width={16} height={16}>
                          <path d="M2,4V2h3V1h6v1h3v2H2z M13,13c0,1.1-0.9,2-2,2H5c-1.1,0-2-0.9-2-2V5h10V13z" />
                        </svg>
                      </button>
                    </label>
                  </div>
                </div>
                <div className="vehicle-picker-modal__actions">
                  <button
                    type="button"
                    className="btn btn-sm btn-secondary vehicle-picker-modal__close-button"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-primary"
                    data-to-panel="form"
                  >
                    Add A Vehicle
                  </button>
                </div>
              </div>
              <div className="vehicle-picker-modal__panel" data-panel="form">
                <div className="vehicle-picker-modal__title card-title">
                  Add A Vehicle
                </div>
                <div className="vehicle-form vehicle-form--layout--modal">
                  <div className="vehicle-form__item vehicle-form__item--select">
                    <select
                      className="form-control form-control-select2"
                      aria-label="Year"
                    >
                      <option value="none">Select Year</option>
                      <option>2010</option>
                      <option>2011</option>
                      <option>2012</option>
                      <option>2013</option>
                      <option>2014</option>
                      <option>2015</option>
                      <option>2016</option>
                      <option>2017</option>
                      <option>2018</option>
                      <option>2019</option>
                      <option>2020</option>
                    </select>
                  </div>
                  <div className="vehicle-form__item vehicle-form__item--select">
                    <select
                      className="form-control form-control-select2"
                      aria-label="Brand"
                      disabled="disabled"
                    >
                      <option value="none">Select Brand</option>
                      <option>Audi</option>
                      <option>BMW</option>
                      <option>Ferrari</option>
                      <option>Ford</option>
                      <option>KIA</option>
                      <option>Nissan</option>
                      <option>Tesla</option>
                      <option>Toyota</option>
                    </select>
                  </div>
                  <div className="vehicle-form__item vehicle-form__item--select">
                    <select
                      className="form-control form-control-select2"
                      aria-label="Model"
                      disabled="disabled"
                    >
                      <option value="none">Select Model</option>
                      <option>Explorer</option>
                      <option>Focus S</option>
                      <option>Fusion SE</option>
                      <option>Mustang</option>
                    </select>
                  </div>
                  <div className="vehicle-form__item vehicle-form__item--select">
                    <select
                      className="form-control form-control-select2"
                      aria-label="Engine"
                      disabled="disabled"
                    >
                      <option value="none">Select Engine</option>
                      <option>Gas 1.6L 125 hp AT/L4</option>
                      <option>Diesel 2.5L 200 hp AT/L5</option>
                      <option>Diesel 3.0L 250 hp MT/L5</option>
                    </select>
                  </div>
                  <div className="vehicle-form__divider">Or</div>
                  <div className="vehicle-form__item">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter VIN number"
                      aria-label="VIN number"
                    />
                  </div>
                </div>
                <div className="vehicle-picker-modal__actions">
                  <button
                    type="button"
                    className="btn btn-sm btn-secondary"
                    data-to-panel="list"
                  >
                    Back to list
                  </button>
                  <button type="button" className="btn btn-sm btn-primary">
                    Add A Vehicle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* vehicle-picker-modal / end */}
        {/* photoswipe */}
        <div className="pswp" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="pswp__bg" />
          <div className="pswp__scroll-wrap">
            <div className="pswp__container">
              <div className="pswp__item" />
              <div className="pswp__item" />
              <div className="pswp__item" />
            </div>
            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                <div className="pswp__counter" />
                <button
                  className="pswp__button pswp__button--close"
                  title="Close (Esc)"
                />
                {/*<button class="pswp__button pswp__button&#45;&#45;share" title="Share"></button>*/}
                <button
                  className="pswp__button pswp__button--fs"
                  title="Toggle fullscreen"
                />
                <button
                  className="pswp__button pswp__button--zoom"
                  title="Zoom in/out"
                />
                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div className="pswp__share-tooltip" />
              </div>
              <button
                className="pswp__button pswp__button--arrow--left"
                title="Previous (arrow left)"
              />
              <button
                className="pswp__button pswp__button--arrow--right"
                title="Next (arrow right)"
              />
              <div className="pswp__caption">
                <div className="pswp__caption__center" />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MobileMenu