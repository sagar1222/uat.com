import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const FindByBrands = ({ brands }) => {
  const [tiles, setTiles] = useState(12);

  return (
    <>
    
<div className="block-space block-space--layout--divider-nl " />
      <section className="_ab_er_we_next">
        <div className="container-fluid">
          <div className="service-nav-tab">
            <h3>SEARCH BY BRANDS </h3>
            <div>
            

              <div className="">

                <ul class="nav" role="tablist">
                {brands?.map((brand, idx) => {
                  return (
                    idx < tiles && (
                      <li className="col-md-2 p-3 brand__card" key={idx}>
                          <a  class="link text-center block-brands__item-link"
                            href="/shop"
                            state={{ id: idx, _id: brand.id, type: "b" }}
                          >
                            {" "}
                            <img src={brand.thumb} alt="" />
                          <br/>
                          <span class="p-2 review__author">  {brand.name} </span>
                          </a>{" "}
                        
                      </li>
                    )
                  );
                })}

              </ul>
              </div>
              <button
                style={{ outline: "none" }}
                id="loadMore"
                onClick={() => setTiles(tiles === 12 ? brands?.length : 12)}
              >
                {tiles === 12 ? "Load More" : "Hide"}
              </button>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindByBrands;
