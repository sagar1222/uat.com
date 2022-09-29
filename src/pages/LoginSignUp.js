import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, login, register } from "../features/user/userSlice";

const LoginSignUp = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [emailR, setEmailR] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [first_name, setF_name] = useState("");
  const [last_name, setL_name] = useState("");
  const [phone, setPhone] = useState("");
  const login_data = { email, password, device_token: "jj" };
  const registration_data = {
    first_name,
    last_name,
    phone,
    email:emailR,
    password:passwordR,
    type: "customer",
  };
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") alert("All fields are mandatory!");
    else {
      dispatch(login(login_data));
      setEmail("");
      setPassword("");
      navigate("/");
    }
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    if (emailR === "" || passwordR === "" || first_name === "" || phone === "")
      alert("All fields are mandatory!");
    else {
      dispatch(register(registration_data));
      setEmail("");
      setF_name("");
      setL_name("");
      setPasswordR("");
      setPhone("");
      navigate("/");
    }
  };
  let user = useSelector(getUser);
  console.log(user);

  return (
    <div className="site__body">
      <div className="block-space block-space--layout--after-header" />
      <div className="block">
        <div className="container container--max--lg">
          <div className="row">
            <div className="col-md-6 d-flex">
              <div className="card flex-grow-1 mb-md-0 mr-0 mr-lg-3 ml-0 ml-lg-4">
                <div className="card-body card-body--padding--2">
                  <h3 className="card-title">Login</h3>
                  <form>
                    <div className="form-group">
                      <label htmlFor="signin-email">Email address</label>
                      <input
                        id="signin-email"
                        type="email"
                        className="form-control"
                        placeholder="customer@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="signin-password">Password</label>
                      <input
                        id="signin-password"
                        type="password"
                        className="form-control"
                        placeholder="Secret word"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <small className="form-text text-muted">
                        <a href="#">Forgot password?</a>
                      </small>
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <span className="input-check form-check-input">
                          <span className="input-check__body">
                            <input
                              className="input-check__input"
                              type="checkbox"
                              id="signin-remember"
                            />
                            <span className="input-check__box" />
                            <span className="input-check__icon">
                              <svg width="9px" height="7px">
                                <path d="M9,1.395L3.46,7L0,3.5L1.383,2.095L3.46,4.2L7.617,0L9,1.395Z" />
                              </svg>{" "}
                            </span>
                          </span>
                        </span>
                        <label
                          className="form-check-label"
                          htmlFor="signin-remember"
                        >
                          Remember Me
                        </label>
                      </div>
                    </div>
                    <div className="form-group mb-0">
                      <button
                        type="submit"
                        className="btn btn-primary mt-3"
                        onClick={loginHandler}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex mt-4 mt-md-0">
              <div className="card flex-grow-1 mb-0 ml-0 ml-lg-3 mr-0 mr-lg-4">
                <div className="card-body card-body--padding--2">
                  <h3 className="card-title">Register</h3>
                  <form>
                    <div className="form-group">
                      <label htmlFor="signup-email">First Name</label>
                      <input
                        id="first_name"
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        value={first_name}
                        onChange={(e) => setF_name(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="signup-email">Last Name</label>
                      <input
                        id="last_name"
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        value={last_name}
                        onChange={(e) => setL_name(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="signup-email">Email address</label>
                      <input
                        id="signup-email"
                        type="email"
                        className="form-control"
                        placeholder="customer@example.com"
                        value={emailR}
                        onChange={(e) => setEmailR(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="signup-email">Phone/Mobile</label>
                      <input
                        id="mobile"
                        type="tel"
                        className="form-control"
                        placeholder="Mobile"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="signup-password">Password</label>
                      <input
                        id="signup-password"
                        type="password"
                        className="form-control"
                        placeholder="Secret word"
                        value={passwordR}
                        onChange={(e) => setPasswordR(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="signup-confirm">Repeat password</label>
                      <input
                        id="signup-confirm"
                        type="password"
                        className="form-control"
                        placeholder="Secret word"
                      />
                    </div>
                    <div className="form-group mb-0">
                      <button
                        type="submit"
                        className="btn btn-primary mt-3"
                        onClick={registerHandler}
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-space block-space--layout--before-footer" />
    </div>
  );
};

export default LoginSignUp;
