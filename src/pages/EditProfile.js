import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../apiServises/api";
import AccountDashboard from "../components/AccountDashboard";
import AccountNavigation from "../components/AccountNavigation";
import { getUser, updateUser } from "../features/user/userSlice";

const EditProfile = () => {
    let user = useSelector(getUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let token = user?.api_token || user?.access_token;

  const [contact, setContact] = useState(user?.contact);

  const [first_name, setF_name] = useState("");
  const [last_name, setL_name] = useState("");
  const [mobile, setMobile] = useState("");
  const [address_line_1, setAddress_line_1] = useState("");
  const [address_line_2, setAddress_line_2] = useState("");
  const [state, setState] = useState("Delhi-NCR");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("India");
  const [zip_code, setZip_code] = useState("");
  const [gender, setGender] = useState("Male");
  const [landline, setLandline] = useState("");

  const request = {
    first_name: first_name,
    last_name: last_name,
    email: contact?.email,
    mobile: mobile,
    address_line_1: address_line_1,
    address_line_2: address_line_2,
    state: state,
    city: city,
    country: country,
    gender: gender,
    zip_code: zip_code,
    landline: landline,
  };
    const updateDetails =async(e)=>{
      e.preventDefault();
      console.log(request);
        dispatch(updateUser({ token, request }))
        navigate('/account')
    }
  useEffect(() => {
    if (contact) {
      setF_name(contact.first_name || "");
      setL_name(contact.last_name || "");
      setMobile(contact.mobile || "");
      setAddress_line_1(contact.address_line_1 || "");
      setAddress_line_2(contact.address_line_2 || "");
      setCity(contact.city || "");
      setZip_code(contact.zip_code || "");
      setLandline(contact.landline || "");
    }
  }, [contact]);

  return (
    <div className="site__body">
      <div className="block-space block-space--layout--after-header" />
      <div className="block">
        <div className="container container--max--xl">
          <div className="row">
            <AccountNavigation />
            <div className="col-12 col-lg-9 mt-4 mt-lg-0">
              <div className="card">
                <div className="card-header">
                  <h5>Edit Address</h5>
                </div>
                <div className="card-divider" />
                <div className="card-body card-body--padding--2">
                  <div className="row no-gutters">
                    <div className="col-12 col-lg-10 col-xl-8">
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="address-first-name">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="address-first-name"
                            placeholder="First Name"
                            value={first_name}
                            onChange={(e) => {
                              setF_name(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="address-last-name">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="address-last-name"
                            placeholder="Last Name"
                            value={last_name}
                            onChange={(e) => {
                              setL_name(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="checkout-street-address">
                          Street Address
                        </label>
                        <input
                          type="text"
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
                            readOnly
                            className="form-control"
                            id="checkout-email"
                            placeholder="Email address"
                            value={user?.email}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="checkout-phone">Phone</label>
                          <input
                            type="text"
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
                      <div className="form-group mb-0 pt-3 mt-3">
                        <button className="btn btn-primary" onClick={(e)=>updateDetails(e)}>Save</button>
                      </div>
                    </div>
                  </div>
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

export default EditProfile;
