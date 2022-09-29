import React from "react";

const Footer = () => {
  return (
    <>
      <div className="block-space block-space--layout--divider-lg"></div>
      <div className="site">
        <footer className="site__footer">
          <div className="site-footer">
            <div className="decor site-footer__decor ">
              <div className="decor__body">
                <div className="decor__start" />
                <div className="decor__end" />
                <div className="decor__center" />
              </div>
            </div>
            <div className="site-footer__widgets">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-xl-4">
                    <div className="site-footer__widget footer-contacts">
                      <h5 className="footer-contacts__title">Contact Us</h5>
                      <div className="footer-contacts__text">
                      Established in 2019, GaadiWeb has become a pioneer in the auto component domestic aftermarket by creating an Online to Offline model.

                      GaadiWeb seeks to be the one-stop-shop of auto components and Accessories for B2C and B2B clients.
                      </div>
                      <address className="footer-contacts__contacts">
                        <dl>
                          <dt>Phone Number</dt>
                          <dd>011 - 41617193 9821449920/70</dd>
                        </dl>
                        <dl>
                          <dt>Email Address</dt>
                          <dd>support@gaadiweb.com</dd>
                        </dl>
                        <dl>
                          <dt>Our Location</dt>
                          <dd>Lothian Road, Kashmeri Gate, Delhi, 110006</dd>
                        </dl>
                        <dl>
                          <dt>Monday-Sunday</dt>
                          <dd>Timing 09 to 19:00</dd>
                        </dl>
                      </address>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 col-xl-2">
                    <div className="site-footer__widget footer-links">
                      <h5 className="footer-links__title">Information</h5>
                      <ul className="footer-links__list">
                        <li className="footer-links__item">
                          <a href="/about-us" className="footer-links__link">
                            About Us
                          </a>
                        </li>
                        <li className="footer-links__item">
                          <a href="/delivaryinfo" className="footer-links__link">
                            Delivery Information
                          </a>
                        </li>
                        <li className="footer-links__item">
                          <a href="/privecy" className="footer-links__link">
                            Privacy Policy
                          </a>
                        </li>
                        <li className="footer-links__item">
                          <a href="/brand" className="footer-links__link">
                            Brands
                          </a>
                        </li>
                        <li className="footer-links__item">
                          <a href="/contactus" className="footer-links__link">
                            Contact Us
                          </a>
                        </li>
                        <li className="footer-links__item">
                          <a href="/returns" className="footer-links__link">
                            Returns
                          </a>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 col-xl-2">
                    <div className="site-footer__widget footer-links">
                      <h5 className="footer-links__title">My Account</h5>
                      <ul className="footer-links__list">
                        <li className="footer-links__item">
                          <a href="/storelocation" className="footer-links__link">
                            Store Location
                          </a>
                        </li>
                        <li className="footer-links__item">
                          <a href="/orderhistory" className="footer-links__link">
                            Order History
                          </a>
                        </li>
                        <li className="footer-links__item">
                          <a href="/wishlist" className="footer-links__link">
                            Wish List
                          </a>
                        </li>
                     {/*   <li className="footer-links__item">
                          <a href="newsletter" className="footer-links__link">
                            Newsletter
                          </a>
  </li> */}
                        <li className="footer-links__item">
                          <a href="specials" className="footer-links__link">
                            Specials
                          </a>
                        </li>
                        <li className="footer-links__item">
                          <a href="gift" className="footer-links__link">
                            Gift Certificates
                          </a>
                        </li>
                        <li className="footer-links__item">
                          <a href="affilate" className="footer-links__link">
                            Affiliate
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="site-footer__widget footer-newsletter">
                      <h5 className="footer-newsletter__title">Newsletter</h5>
                      <div className="footer-newsletter__text">
                        Enter your email address below to subscribe to our
                        newsletter and keep up to date with discounts and
                        special offers.
                      </div>
                      <form action="#" className="footer-newsletter__form">
                        <label
                          className="sr-only"
                          htmlFor="footer-newsletter-address"
                        >
                          Email Address
                        </label>
                        <input
                          type="text"
                          className="footer-newsletter__form-input"
                          id="footer-newsletter-address"
                          placeholder="Email Address..."
                        />
                        <button className="footer-newsletter__form-button">
                          Subscribe
                        </button>
                      </form>
                      <div className="footer-newsletter__text footer-newsletter__text--social">
                        Follow us on social networks
                      </div>
                      <div className="footer-newsletter__social-links social-links">
                        <ul className="social-links__list">
                          <li className="social-links__item social-links__item--facebook">
                            <a
                              href="https://www.facebook.com/GWgaadiweb/"
                              target="_blank"
                            >
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li className="social-links__item social-links__item--twitter">
                            <a
                              href="https://twitter.com/gwgaadiweb"
                              target="_blank"
                            >
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li className="social-links__item social-links__item--youtube">
                            <a
                              href="https://www.youtube.com/results?search_query=gaadiweb"
                              target="_blank"
                            >
                              <i className="fab fa-youtube" />
                            </a>
                          </li>
                          <li className="social-links__item social-links__item--instagram">
                            <a
                              href="https://www.instagram.com/gwgaadiweb/"
                              target="_blank"
                            >
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
