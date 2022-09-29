import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { addToCart } from "../features/cart/cartSlice";
import { getUser } from "../features/user/userSlice";
const CategoryBlock = ({ categories, products }) => {
  const sliderRef = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  let token = user?.api_token || user?.access_token;
  const addToCartHandler = (product) => {
    const request = {
      discount_amount: "null",
      cart_amount:
        product.product_variations[0].variations[0].sell_price_inc_tax * 1,
      cart_discount_amount: "null",
      cart_discount_type: "null",
      cart_discount_rate: "null",
      cart_coupon: "null",
      product_id: product.id,
      discount_rate: "null",
      discount_type: "null",
      quantity: 1,
      amount:
        product.product_variations[0].variations[0].sell_price_inc_tax * 1,
      coupon: "null",
      variation_id:
        product.product_variations[0].variations[0].product_variation_id,
    };
    dispatch(addToCart({ token, request }));
  };
  // console.log(categories)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <>
      {/* <div className="block-space block-space--layout--divider-lg"></div> */}
      <div className="block block-zone">
        <div className="container">
          <div className="block-zone__body">


          {/*  <div className="block-zone__card category-card category-card--layout--overlay">
              <div className="category-card__body">
                <div className="category-card__overlay-image">
                  <img
                    srcSet="
                  assets/images/categories/category-overlay-3-mobile.jpg 530w,
                  assets/images/categories/category-overlay-3.jpg        305w
                "
                    src="assets/images/categories/category-overlay-3.jpg"
                    sizes="(max-width: 575px) 530px, 305px"
                    alt=""
                  />
                </div>
                <div className="category-card__overlay-image category-card__overlay-image--blur">
                  <img
                    srcSet="
                  assets/images/categories/category-overlay-3-mobile.jpg 530w,
                  assets/images/categories/category-overlay-3.jpg        305w
                "
                    src="assets/images/categories/category-overlay-3.jpg"
                    sizes="(max-width: 575px) 530px, 305px"
                    alt=""
                  />
                </div>
                <div className="category-card__content">
                  <div className="category-card__info">
                    <div className="category-card__name">
                      <a href="category-4-columns-sidebar.html">
                        Popular Categories
                      </a>
                    </div>
                    <ul className="category-card__children">
                      {categories?.map((cate, idx) => {
                        return (
                          idx < 7 && (
                            <li key={idx}>
                              <NavLink
                                to="/shop"
                                state={{ id: idx, _id: cate.id ,type:'c'}}
                              >
                                {cate.name}
                              </NavLink>
                            </li>
                          )
                        );
                      })}
                    </ul>
                    <div className="category-card__actions">
                      <NavLink to="/shop" className="btn btn-primary btn-sm">
                        Shop All
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
                    </div>  */}



            <div className="block-zone__widget col-lg-12 col-centered">
              <div className="block-zone__widget-header">
                <div className="block-zone__tabs">
                  <button
                    className="block-zone__tabs-button block-zone__tabs-button--active"
                    type="button"
                  >
                    Featured
                  </button>
                  <button className="block-zone__tabs-button" type="button">
                    Bestsellers
                  </button>
                  <button className="block-zone__tabs-button" type="button">
                    Popular
                  </button>
                </div>
                <div className="arrow block-zone__arrow block-zone__arrow--prev arrow--prev">
                  <button
                    className="arrow__button"
                    type="button"
                    onClick={() => sliderRef?.current?.slickPrev()}
                  >
                    <svg width={7} height={11}>
                      <path d="M6.7,0.3L6.7,0.3c-0.4-0.4-0.9-0.4-1.3,0L0,5.5l5.4,5.2c0.4,0.4,0.9,0.3,1.3,0l0,0c0.4-0.4,0.4-1,0-1.3l-4-3.9l4-3.9C7.1,1.2,7.1,0.6,6.7,0.3z" />
                    </svg>
                  </button>
                </div>
                <div
                  className="arrow block-zone__arrow block-zone__arrow--next arrow--next"
                  onClick={() => sliderRef?.current?.slickNext()}
                >
                  <button className="arrow__button" type="button">
                    <svg width={7} height={11}>
                      <path
                        d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
	C-0.1,9.8-0.1,10.4,0.3,10.7z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <Slider ref={sliderRef} {...settings}>
                {products?.map((prod, idx) => (
                  <div className="block-zone__carousel" key={idx}>
                    <div className="block-zone__carousel-item">
                      <div
                        className="product-card"
                        style={{ margin: "0 10px" }}
                      >
                        <div className="product-card__actions-list">
                          <button
                            className="product-card__action product-card__action--wishlist"
                            type="button"
                            aria-label="Add to wish list"
                          >
                            <svg width={16} height={16}>
                              <path
                                d="M13.9,8.4l-5.4,5.4c-0.3,0.3-0.7,0.3-1,0L2.1,8.4c-1.5-1.5-1.5-3.8,0-5.3C2.8,2.4,3.8,2,4.8,2s1.9,0.4,2.6,1.1L8,3.7
	l0.6-0.6C9.3,2.4,10.3,2,11.3,2c1,0,1.9,0.4,2.6,1.1C15.4,4.6,15.4,6.9,13.9,8.4z"
                              />
                            </svg>
                          </button>
                          <button
                            className="product-card__action product-card__action--compare"
                            type="button"
                            aria-label="Add to compare"
                          >
                            <svg width={16} height={16}>
                              <path d="M9,15H7c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v12C10,14.6,9.6,15,9,15z" />
                              <path d="M1,9h2c0.6,0,1,0.4,1,1v4c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1v-4C0,9.4,0.4,9,1,9z" />
                              <path d="M15,5h-2c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V6C16,5.4,15.6,5,15,5z" />
                            </svg>
                          </button>
                        </div>
                        <div className="product-card__image">
                          <div className="image image--type--product">
                            <NavLink
                              to="/product-details"
                              state={{ id: `${prod.id}` }}
                              className="image__body"
                            >
                              <img
                                className="image__tag"
                                src={
                                  prod.image
                                    ? prod.image:"assets/images/no_image.jpeg"
                                }
                                alt=""
                              />
                            </NavLink>
                          </div>
                        </div>
                        <div className="product-card__info">
                          <div className="product-card__meta">
                            <span className="product-card__meta-title">
                              SKU:
                            </span>
                            {prod.sku}
                          </div>
                          <div
                            className="product-card__name"
                            style={{ minHeight: "12vh" }}
                          >
                            <div>
                              <div className="product-card__badges">
                                <div className="tag-badge tag-badge--sale">
                                  sale
                                </div>
                              </div>
                              <NavLink
                                to="/product-details"
                                state={{ id: `${prod.id}` }}
                              >
                                {prod.name}
                              </NavLink>
                            </div>
                          </div>
                          <div className="product-card__rating">
                            <div className="rating product-card__rating-stars">
                              <div className="rating__body">
                                <div className="rating__star rating__star--active" />
                                <div className="rating__star rating__star--active" />
                                <div className="rating__star rating__star--active" />
                                <div className="rating__star" />
                                <div className="rating__star" />
                              </div>
                            </div>
                            <div className="product-card__rating-label">
                              3 on 14 reviews
                            </div>
                          </div>
                        </div>
                        <div className="product-card__footer">
                          <div className="product-card__prices">
                            <div className="product-card__price product-card__price--new">
                              &#x20B9;
                              {parseFloat(
                                prod.product_variations[0].variations[0]
                                  .sell_price_inc_tax
                              ).toFixed(2)}
                            </div>
                            <div className="product-card__price product-card__price--old">
                              &#x20B9;
                              {parseFloat(
                                prod.product_variations[0].variations[0]
                                  .sell_price_inc_tax
                              ).toFixed(2)}
                            </div>
                          </div>
                          <button
                            className="product-card__addtocart-icon"
                            type="button"
                            onClick={() => addToCartHandler(prod)}
                            aria-label="Add to cart"
                          >
                            <svg width={20} height={20}>
                              <circle cx={7} cy={17} r={2} />
                              <circle cx={15} cy={17} r={2} />
                              <path
                                d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
	V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
	C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryBlock;
