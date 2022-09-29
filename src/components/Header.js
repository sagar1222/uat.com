import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  deleteFromCart,
  getCart,
  getCartDetails,
} from "../features/cart/cartSlice";
import { getUser, login, logout } from "../features/user/userSlice";
import { getHomeData } from "../features/home/homeSlice";
import api from "../apiServises/api";

const Header = () => {
  let user = useSelector(getUser);
  let cart = useSelector(getCart);
  const home_data = useSelector(getHomeData);
  let categories = home_data?.categories;

  let token = user?.api_token || user?.access_token;
  const dispatch = useDispatch();
  const [search_key, setSearch_key] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login_data = { email, password, device_token: "jj" };

  useEffect(() => {
    dispatch(getCartDetails(token));
  }, [dispatch, token]);

  const loginHandler = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") alert("All fields are mandatory!");
    else {
      dispatch(login(login_data));
      setEmail("");
      setPassword("");
    }
  };

  const deleteHandler = (id) => {
    dispatch(deleteFromCart({ token, id }));
  };
  const searchHandler = async (e) => {
    if (e.target.value) {
      const response = await api.get(`/product-search/${e.target.value}`);
      if (response) {
        setSearch_key(response.data.output);
      }
    }
    else {
      setSearch_key(null);
    }
  };

  return (
    <>
      {/* site__mobile-header */}
      <header className="site__mobile-header">
        <div className="mobile-header">
          <div className="container-fluid">
            <div className="mobile-header__body">
              <button className="mobile-header__menu-button" type="button">
                <svg width="18px" height="14px">
                  <path d="M-0,8L-0,6L18,6L18,8L-0,8ZM-0,-0L18,-0L18,2L-0,2L-0,-0ZM14,14L-0,14L-0,12L14,12L14,14Z" />
                </svg>
              </button>
              <NavLink className="mobile-header__logo  "  to="/">
                {/* mobile-logo */}
                <img
                  style={{  width: "60%", maxWidth: "100px",margin: "20px 0"  }}
                  src="assets/images/logo.png"
                />
                {/* mobile-logo / end */}
              </NavLink>
              <div className="mobile-header__search mobile-search">
                <form className="mobile-search__body">
                  <input
                    type="text"
                    className="mobile-search__input"
                    placeholder="Enter keyword or part number"
                  />
                  <button
                    type="button"
                    className="mobile-search__vehicle-picker"
                    aria-label="Select Vehicle"
                  >
                    <svg width={20} height={20}>
                      <path
                        d="M6.6,2c2,0,4.8,0,6.8,0c1,0,2.9,0.8,3.6,2.2C17.7,5.7,17.9,7,18.4,7C20,7,20,8,20,8v1h-1v7.5c0,0.8-0.7,1.5-1.5,1.5h-1
	c-0.8,0-1.5-0.7-1.5-1.5V16H5v0.5C5,17.3,4.3,18,3.5,18h-1C1.7,18,1,17.3,1,16.5V16V9H0V8c0,0,0.1-1,1.6-1C2.1,7,2.3,5.7,3,4.2
	C3.7,2.8,5.6,2,6.6,2z M13.3,4H6.7c-0.8,0-1.4,0-2,0.7c-0.5,0.6-0.8,1.5-1,2C3.6,7.1,3.5,7.9,3.7,8C4.5,8.4,6.1,9,10,9
	c4,0,5.4-0.6,6.3-1c0.2-0.1,0.2-0.8,0-1.2c-0.2-0.4-0.5-1.5-1-2C14.7,4,14.1,4,13.3,4z M4,10c-0.4-0.3-1.5-0.5-2,0
	c-0.4,0.4-0.4,1.6,0,2c0.5,0.5,4,0.4,4,0C6,11.2,4.5,10.3,4,10z M14,12c0,0.4,3.5,0.5,4,0c0.4-0.4,0.4-1.6,0-2c-0.5-0.5-1.3-0.3-2,0
	C15.5,10.2,14,11.3,14,12z"
                      />
                    </svg>
                    <span className="mobile-search__vehicle-picker-label">
                      Vehicle
                    </span>
                  </button>
                  <button
                    type="submit"
                    className="mobile-search__button mobile-search__button--search"
                  >
                    <svg width={20} height={20}>
                      <path
                        d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
	c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
	c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="mobile-search__button mobile-search__button--close"
                  >
                    <svg width={20} height={20}>
                      <path
                        d="M16.7,16.7L16.7,16.7c-0.4,0.4-1,0.4-1.4,0L10,11.4l-5.3,5.3c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L8.6,10L3.3,4.7
	c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L10,8.6l5.3-5.3c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L11.4,10l5.3,5.3
	C17.1,15.7,17.1,16.3,16.7,16.7z"
                      />
                    </svg>
                  </button>
                  <div className="mobile-search__field" />
                </form>
              </div>
              <div className="mobile-header__indicators">
                <div className="mobile-indicator mobile-indicator--search d-md-none">
                  <button type="button" className="mobile-indicator__button">
                    <span className="mobile-indicator__icon">
                      <svg width={20} height={20}>
                        <path
                          d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
	c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
	c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="mobile-indicator d-none d-md-block">
                  <a
                    href="account-login.html"
                    className="mobile-indicator__button"
                  >
                    <span className="mobile-indicator__icon">
                      <svg width={20} height={20}>
                        <path
                          d="M20,20h-2c0-4.4-3.6-8-8-8s-8,3.6-8,8H0c0-4.2,2.6-7.8,6.3-9.3C4.9,9.6,4,7.9,4,6c0-3.3,2.7-6,6-6s6,2.7,6,6
	c0,1.9-0.9,3.6-2.3,4.7C17.4,12.2,20,15.8,20,20z M14,6c0-2.2-1.8-4-4-4S6,3.8,6,6s1.8,4,4,4S14,8.2,14,6z"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
                <div className="mobile-indicator d-none d-md-block">
                  <a href="wishlist.html" className="mobile-indicator__button">
                    <span className="mobile-indicator__icon">
                      <svg width={20} height={20}>
                        <path
                          d="M14,3c2.2,0,4,1.8,4,4c0,4-5.2,10-8,10S2,11,2,7c0-2.2,1.8-4,4-4c1,0,1.9,0.4,2.7,1L10,5.2L11.3,4C12.1,3.4,13,3,14,3 M14,1
	c-1.5,0-2.9,0.6-4,1.5C8.9,1.6,7.5,1,6,1C2.7,1,0,3.7,0,7c0,5,6,12,10,12s10-7,10-12C20,3.7,17.3,1,14,1L14,1z"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
                <div className="mobile-indicator">
                  <NavLink to="/cart" className="mobile-indicator__button">
                    <span className="mobile-indicator__icon">
                      <svg width={20} height={20}>
                        <circle cx={7} cy={17} r={2} />
                        <circle cx={15} cy={17} r={2} />
                        <path
                          d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
	V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
	C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"
                        />
                      </svg>
                      <span className="mobile-indicator__counter">
                        {" "}
                        {cart ? cart.details.length : 0}
                      </span>
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </header>
      {/* site__mobile-header / end */}
      {/* site__header */}
      <header className="site__header">
      
        
        <div className="header">
        
          
          
          {/* <div className="header__megamenu-area megamenu-area" />
          <div className="header__topbar-classic-bg" />
          <div className="header__topbar-classic">
            <div className="topbar topbar--classic">
              <div className="topbar__item-text">
                <NavLink className="topbar__link" to="/about-us">
                  About Us
                </NavLink>
              </div>
              <div className="topbar__item-text">
                <NavLink className="topbar__link" to="/contact-us-v1">
                  Contacts
                </NavLink>
              </div>
              <div className="topbar__item-spring" />
              <div className="topbar__item-button">
                <NavLink to="#" className="topbar__button">
                  <span className="topbar__button-label">Compare:</span>
                  <span className="topbar__button-title">5</span>
                </NavLink>
              </div>
              <div className="topbar__menu">
                <button
                  className="topbar__button topbar__button--has-arrow topbar__menu-button"
                  type="button"
                >
                  <span className="topbar__button-label">Language:</span>
                  <span className="topbar__button-title">EN</span>
                  <span className="topbar__button-arrow">
                    <svg width="7px" height="5px">
                      <path d="M0.280,0.282 C0.645,-0.084 1.238,-0.077 1.596,0.297 L3.504,2.310 L5.413,0.297 C5.770,-0.077 6.363,-0.084 6.728,0.282 C7.080,0.634 7.088,1.203 6.746,1.565 L3.504,5.007 L0.262,1.565 C-0.080,1.203 -0.072,0.634 0.280,0.282 Z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div> */}
          
         
         
          
          <div>
          <div className="header__logo">
            <NavLink to="/" className="logo">
              <div className="logo__slogan">
                Auto parts for Cars, trucks and motorcycles
              </div>
              <div className="logo__image">
                {/* logo */}
                <img
                  style={{ width: "100%", maxWidth: "100px", margin: "10px 0" }}
                  src="assets/images/logo.png"
                />
                {/* logo / end */}
              </div>
              
            </NavLink>

          </div>
          <div className="header__search">
            <div className="search">
              <form action="#" className="search__body">
                <div className="search__shadow" />
                <input
                  className="search__input"
                  type="text"
                  placeholder="Enter Keyword or Part Number"
                  onChange={(e) => searchHandler(e)}
                />
                
                {/* <button
                  className="search__button search__button--start"
                  type="button"
                >
                  <span className="search__button-icon">
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
                  <span className="search__button-title">Select Vehicle</span>
                </button> */}
                
                <NavLink
                  className="search__button search__button--end"
                  // type="submit"
                  to="/shop"
                  state={{ id: search_key, type: "s" }}
                >
                  <span className="search__button-icon">
                    <svg width={20} height={20}>
                      <path
                        d="M19.2,17.8c0,0-0.2,0.5-0.5,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9,14.5,9.5,15,8,15
	c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8
	c0,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z"
                      />
                    </svg>
                  </span>
                </NavLink>
                <div className="search__box" />
                <div className="search__decor">
                  <div className="search__decor-start" />
                  <div className="search__decor-end" />
                </div>
                <div className="search__dropdown search__dropdown--suggestions suggestions">
                  <div className="suggestions__group">
                    <div className="suggestions__group-title">{search_key?.length>0?'Products':'No products found'}</div>
                    <div className="suggestions__group-content">
                      {search_key?.map((item, idx) => {
                        return (
                          <NavLink
                            className="suggestions__item suggestions__product"
                            to="/product-details"
                            state={{ id: `${item.id}` }}
                          >
                            <div className="suggestions__product-image image image--type--product">
                              <div className="image__body">
                                <img
                                  className="image__tag"
                                  src={
                                    item.image_url
                                      ? item.image_url
                                      : "assets/images/no_image.jpeg"
                                  }
                                  // src="assets/images/products/product-2-40x40.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="suggestions__product-info">
                              <div className="suggestions__product-name">
                                {item?.name}
                              </div>
                              <div className="suggestions__product-rating">
                                <div className="suggestions__product-rating-stars">
                                  <div className="rating">
                                    <div className="rating__body">
                                      <div className="rating__star rating__star--active" />
                                      <div className="rating__star rating__star--active" />
                                      <div className="rating__star rating__star--active" />
                                      <div className="rating__star rating__star--active" />
                                      <div className="rating__star rating__star--active" />
                                    </div>
                                  </div>
                                </div>
                                <div className="suggestions__product-rating-label">
                                  5 on 22 reviews
                                </div>
                              </div>
                            </div>
                          </NavLink>
                        );
                      })}

                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
         
          <div className="header__indicators">
            <div className="indicator indicator--trigger--click">
              <a href="#" className="indicator__button">
                <span className="indicator__icon">
                  <svg width={32} height={32}>
                    <path
                      d="M16,18C9.4,18,4,23.4,4,30H2c0-6.2,4-11.5,9.6-13.3C9.4,15.3,8,12.8,8,10c0-4.4,3.6-8,8-8s8,3.6,8,8c0,2.8-1.5,5.3-3.6,6.7
	C26,18.5,30,23.8,30,30h-2C28,23.4,22.6,18,16,18z M22,10c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6S22,13.3,22,10z"
                    />
                  </svg>{" "}
                </span>
                <span className="indicator__title">
                  Hello, {user ? user?.name : "Guest"}
                </span>
                <span className="indicator__value">
                  {user ? "My Account" : "Login"}
                </span>
              </a>
              <div className="indicator__content">
                <div className="account-menu">
                  {!user ? (
                    <form className="account-menu__form">
                      <div className="account-menu__form-title">
                        Log In to Your Account
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="header-signin-email"
                          className="sr-only"
                        >
                          Email address
                        </label>
                        <input
                          id="header-signin-email"
                          type="email"
                          className="form-control form-control-sm"
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="header-signin-password"
                          className="sr-only"
                        >
                          Password
                        </label>
                        <div className="account-menu__form-forgot">
                          <input
                            id="header-signin-password"
                            type="password"
                            className="form-control form-control-sm"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="form-group account-menu__form-button">
                        <button
                          type="submit"
                          className="btn btn-primary btn-sm"
                          onClick={loginHandler}
                        >
                          Login
                        </button>
                      </div>
                      <div className="account-menu__form-link">
                        <NavLink to="login-signup">Create An Account</NavLink>
                      </div>
                    </form>
                  ) : (
                    <>
                      <div className="account-menu__divider" />
                      <a href="#" className="account-menu__user">
                        <div className="account-menu__user-avatar">
                          <img
                            src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png"
                            alt=""
                          />
                        </div>
                        <div className="account-menu__user-info">
                          <div className="account-menu__user-name">
                            {user?.name}
                          </div>
                          <div className="account-menu__user-email">
                            {user?.email}
                          </div>
                        </div>
                      </a>
                      <div className="account-menu__divider" />
                      <ul className="account-menu__links">
                        <li>
                          <NavLink to="/account">Dashboard</NavLink>
                        </li>
                        <li>
                          <NavLink to="/edit-profile">Edit Profile</NavLink>
                        </li>
                        <li>
                          <NavLink to="/orders">Order History</NavLink>
                        </li>
                      </ul>
                      {/* <div className="account-menu__divider" /> */}
                      <ul className="account-menu__links mb-0">
                        <li>
                          <NavLink
                            to="/"
                            className="btn btn-light btn-sm"
                            onClick={() => dispatch(logout(token))}
                          >
                            LogOut
                          </NavLink>
                        </li>
                      </ul>
                    </>
                  )}
                  
                </div>
                
              </div>
              
            </div>
            <div className="indicator indicator--trigger--click">
              <a href="#" className="indicator__button">
                <span className="indicator__icon">
                  <svg width={32} height={32}>
                    <circle cx="10.5" cy="27.5" r="2.5" />
                    <circle cx="23.5" cy="27.5" r="2.5" />
                    <path
                      d="M26.4,21H11.2C10,21,9,20.2,8.8,19.1L5.4,4.8C5.3,4.3,4.9,4,4.4,4H1C0.4,4,0,3.6,0,3s0.4-1,1-1h3.4C5.8,2,7,3,7.3,4.3
	l3.4,14.3c0.1,0.2,0.3,0.4,0.5,0.4h15.2c0.2,0,0.4-0.1,0.5-0.4l3.1-10c0.1-0.2,0-0.4-0.1-0.4C29.8,8.1,29.7,8,29.5,8H14
	c-0.6,0-1-0.4-1-1s0.4-1,1-1h15.5c0.8,0,1.5,0.4,2,1c0.5,0.6,0.6,1.5,0.4,2.2l-3.1,10C28.5,20.3,27.5,21,26.4,21z"
                    />
                  </svg>
                  <span className="indicator__counter">
                    {cart ? cart.details.length : 0}
                  </span>{" "}
                </span>
                <span className="indicator__title">Shopping Cart</span>
                <span className="indicator__value">
                  &#x20B9; {cart ? cart.amount : 0}
                </span>
              </a>
              <div className="indicator__content">
                <div className="dropcart">
                  {cart ? (
                    <>
                      <ul className="dropcart__list">
                        {cart?.details?.map((item, idx) => {
                          return (
                            <div key={idx}>
                              <li className="dropcart__item">
                                <div className="dropcart__item-image image image--type--product">
                                  <a
                                    className="image__body"
                                    href="product-full.html"
                                  >
                                    <img
                                      className="image__tag"
                                      src={
                                        item.image
                                          ? item.image
                                          : "https://banner2.cleanpng.com/20180605/wzl/kisspng-computer-icons-image-file-formats-no-image-5b16ff0d4b81e2.4246835515282337413093.jpg"
                                      }
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="dropcart__item-info">
                                  <div className="dropcart__item-name">
                                    <a href="product-full.html">
                                      {item.product.name}
                                    </a>
                                  </div>
                                  <ul className="dropcart__item-features">
                                    {/* <li>Color: Yellow</li>
                          <li>Material: Aluminium</li> */}
                                  </ul>
                                  <div className="dropcart__item-meta">
                                    <div className="dropcart__item-quantity">
                                      {item.quantity}
                                    </div>
                                    <div className="dropcart__item-price">
                                      &#x20B9; {item.amount}
                                    </div>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  className="dropcart__item-remove "
                                  onClick={() => deleteHandler(item.id)}
                                >
                                  <svg width={10} height={10}>
                                    <path
                                      d="M8.8,8.8L8.8,8.8c-0.4,0.4-1,0.4-1.4,0L5,6.4L2.6,8.8c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L3.6,5L1.2,2.6
	c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L5,3.6l2.4-2.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L6.4,5l2.4,2.4
	C9.2,7.8,9.2,8.4,8.8,8.8z"
                                    />
                                  </svg>
                                </button>
                              </li>
                              <li
                                className="dropcart__divider"
                                role="presentation"
                              />
                            </div>
                          );
                        })}
                      </ul>
                      
                      <div className="dropcart__totals">
                        <table>
                          <tbody>
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
                            <tr>
                              <th>Tax</th>
                              <td>&#x20B9; 0.00</td>
                            </tr>
                            <tr>
                              <th>Total</th>
                              <td>
                                &#x20B9; {parseFloat(cart?.amount).toFixed(2)}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        
                      </div>
                      <div className="dropcart__actions">
                        <NavLink to="/cart" className="btn btn-secondary">
                          View Cart
                        </NavLink>
                        <NavLink to="/checkout" className="btn btn-primary">
                          Checkout
                        </NavLink>
                      </div>
                    </>
                  ) : (
                    <h1 className="btn btn-secondary">Your Cart is Empty</h1>
                  )}
                </div>
              </div>
              
            </div>
          </div>
          </div>
         
          <div>
          <div className="middle__menu">
                 
                  <div className="middle__body">
                    <ul className="middle__list " style={{ textDecoration: 'none' }}>
                       <div className="block-space block-space--layout--divider-lg"></div>
                      <li
                        className="middle__list-padding"
                        role="presentation"
                      />
                      {categories?.map((cate, idx) => {
                        return (
                          <li className="departments__item" key={idx}>
                            <NavLink
                              to="shop"
                              state={{ id: idx, _id: cate.id, type: "c" }}
                              className="departments__item-link"
                            >
                              {cate.name}
                            </NavLink>
                          </li>
                        );
                      })}
                      

                      <li
                        className="departments__list-padding"
                        role="presentation"
                      />
                      
                    </ul>
                    <div className="departments__menu-container" />
                  </div>
                </div>
          </div>
          
        </div>
        <div className="header__navbar">
            
            <div className="header__navbar-departments">
              
              
              <div className="departments">
                <button className="departments__button" type="button">
                  <span className="departments__button-icon">
                    <svg width="16px" height="12px">
                      <path d="M0,7L0,5L16,5L16,7L0,7ZM0,0L16,0L16,2L0,2L0,0ZM12,12L0,12L0,10L12,10L12,12Z" />
                    </svg>{" "}
                  </span>
                  <span className="departments__button-title">
                    Shop By Category
                  </span>
                  <span className="departments__button-arrow">
                    <svg width="9px" height="6px">
                      <path d="M0.2,0.4c0.4-0.4,1-0.5,1.4-0.1l2.9,3l2.9-3c0.4-0.4,1.1-0.4,1.4,0.1c0.3,0.4,0.3,0.9-0.1,1.3L4.5,6L0.3,1.6C-0.1,1.3-0.1,0.7,0.2,0.4z" />
                    </svg>
                  </span>
                </button>
                <div className="departments__menu">
                  <div className="departments__arrow" />
                  <div className="departments__body">
                    <ul className="departments__list">
                      <li
                        className="departments__list-padding"
                        role="presentation"
                      />
                      {categories?.map((cate, idx) => {
                        return (
                          <li className="departments__item" key={idx}>
                            <NavLink
                              to="shop"
                              state={{ id: idx, _id: cate.id, type: "c" }}
                              className="departments__item-link"
                            >
                              {cate.name}
                            </NavLink>
                          </li>
                        );
                      })}
                      

                      <li
                        className="departments__list-padding"
                        role="presentation"
                      />
                      
                    </ul>
                    <div className="departments__menu-container" />
                  </div>
                </div>
              </div>
            </div>
            <div className="header__navbar-menu">
              <div className="main-menu">
              {/*  <ul className="main-menu__list">
                  <li className="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                    <NavLink to="/" className="main-menu__link">
                      Home
                    </NavLink>
                  </li>
                  <li className="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                    <NavLink to="/shop" className="main-menu__link">
                      Shop
                    </NavLink>
                  </li>
                  <li className="main-menu__item main-menu__item--submenu--menu main-menu__item--has-submenu">
                    <NavLink className="main-menu__link" to="/about-us">
                      About Us
                    </NavLink>
                  </li>

                  
                </ul>*/}
              </div>
            </div>
            <div className="header__navbar-phone phone">
              <a href="#" className="phone__body">
                <div className="phone__title">Call Us:</div>
                <div className="phone__number">800 060-0730</div>
              </a>
            </div>
          </div>
      </header>
      {/* site__header / end */}
    </>
  );
};

export default Header;
