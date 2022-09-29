import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Style.css'

const FindByCategory = ({ categories }) => {
  const [tiles, setTiles] = useState(12);

  return (
    <div>
    <div class="badge-dark block-banners__item-title header-top-bnr p-2 text-center">
       Limited Time Deals
    </div>
    <div class="block-space block-space--layout--before-footer"></div>
   
    <div class="container-fluid">
      <div class="container-fluid">
          <div class="row">
              <div class="col-lg-9 service-nav-tab">



                  <h3>SEARCH BY CATEGORIES </h3>
                  <div className="row">
                {categories?.map((cate, idx) => {
                  return (
                    idx < tiles && (
                      <div className="col-md-2" key={idx}>
                        <div className="c-icons">
                          <NavLink
                            to="/shop"
                            state={{ id: idx, _id: cate.id, type: "c" }}
                          >
                            {" "}
                            <img  src="https://storage.googleapis.com/spares/spares/segment_icon/Ac.png"  />
                            <h4>{cate.name}</h4>
                          </NavLink>{" "}
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
                  <button
                  style={{ outline: "none" }}
                  id="loadMore"
                  onClick={() => setTiles(tiles === 12 ? categories?.length : 12)}
                >
                  {tiles === 12 ? "Load More" : "Hide"}
                </button>{" "}

              </div>
              <div class="col-lg-3 dlab-we-best ">
                <h3>MAKE AN ENQUIRY </h3>

                  <div class="bg-secondry dlab-appoinment-now-form p-5 p-tb40 text-black tp-dark">
                      <form method="post" class="dzForm" action="script/contact.php">
                          <div class="row">
                              <div class="col-lg-12 text-center text-white m-b10">
                                 
                                  <div class="dlab-separator-outer">
                                      <div class="dlab-separator bg-primary"></div>
                                  </div>
                              </div>
                              <div class="col-lg-12">
                                  <div class="form-group">
                                      <input name="dzName" class="form-control" placeholder="Name" type="text"/>
                                  </div>
                              </div>
                              <div class="col-lg-12">
                                  <div class="form-group">
                                      <input name="dzEmail" class="form-control" placeholder="Email" type="text"/>
                                  </div>
                              </div>
                              <div class="col-lg-12">
                                  <div class="form-group">
                                      <input name="dzOther[date]" class="form-control" placeholder="Select Date" type="text"/>
                                  </div>
                              </div>

                              <div class="col-lg-12">
                                  <div class="form-group">
                                      <div class="input-group">
                                          <textarea name="dzMessage" rows="4" class="form-control" required="" placeholder="Text messege..."></textarea>
                                      </div>
                                  </div>
                              </div>
                            
                              <div class="col-lg-12 text-center">
                               
                                  <button name="Reset" value="Reset" type="reset" class="site-button skew-secondry m-r10">
                        <span>Reset</span>
                      </button>
                                  <button name="submit" type="submit" value="Submit" class="site-button skew-secondry">
                        <span>Submit</span>
                      </button>
                              </div>
                          </div>                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
  );
};

export default FindByCategory;
