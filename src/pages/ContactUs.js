import React from "react";
const ContactUs = () => {
  return (
    <>
   
    
    <div class="site__body">
    <div class="block-map block">
      <div class="block-map__body">
        <iframe
          src="https://maps.google.com/maps?width=802&amp;height=400&amp;hl=en&amp;q=Lothian Road, Kashmeri Gate, Delhi, 110006&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
    <div
      class="block-header block-header--has-breadcrumb block-header--has-title"
    >
      <div class="container">
        <div class="block-header__body">
          <nav
            class="breadcrumb block-header__breadcrumb"
            aria-label="breadcrumb"
          >
            
          </nav><br></br>
          <h1 class="block-header__title">Contact Us</h1>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="container container--max--lg">
        <div class="card">
          <div class="card-body card-body--padding--2">
            <div class="row">
              <div class="col-12 col-lg-6 pb-4 pb-lg-0">
                <div class="mr-1">
                  <h4 class="contact-us__header card-title">Our Address</h4>
                  <div class="contact-us__address">
                    <p>
                    Lothian Road, Kashmeri Gate, Delhi, 110006<br />Email:
                    support@gaadiweb.com<br />Phone Number: 011 - 41617193, 9821449920/70
                     
                    </p>
                    <p>
                      <strong>Opening Hours</strong><br />Monday to Friday:
                      8am-8pm<br />Saturday: 8am-6pm<br />Sunday: 10am-4pm
                    </p>
                    <p>
                      <strong>Comment</strong><br />Established in 2019, GaadiWeb has become a pioneer in the auto component domestic aftermarket by creating an Online to Offline model.

                      GaadiWeb seeks to be the one-stop-shop of auto components and Accessories for B2C and B2B clients.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="ml-1">
                  <h4 class="contact-us__header card-title">
                    Leave us a Message
                  </h4>
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="form-name">Your Name</label>
                        <input
                          type="text"
                          id="form-name"
                          class="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="form-email">Email</label>
                        <input
                          type="email"
                          id="form-email"
                          class="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="form-subject">Subject</label>
                      <input
                        type="text"
                        id="form-subject"
                        class="form-control"
                        placeholder="Subject"
                      />
                    </div>
                    <div class="form-group">
                      <label for="form-message">Message</label>
                      <textarea
                        id="form-message"
                        class="form-control"
                        rows="4"
                      ></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block-space block-space--layout--before-footer"></div>
  </div>
   
  </>
  
  );
};

export default ContactUs;