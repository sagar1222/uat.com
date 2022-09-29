import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import api from "../apiServises/api";
import { addToCart } from "../features/cart/cartSlice";
import { getUser } from "../features/user/userSlice";

const ProductDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  let token = user?.api_token || user?.access_token;
  const { id } = location.state;

  const [count, setCount] = useState(1);
  const [product, setProduct] = useState("");

  useEffect(() => {
    const getProductDetails = async (id) => {
      const res = await api.post(`/products/${id}`);
      setProduct(res.data.output);
    };
    getProductDetails(id);
  }, [id]);
  if (product === "")
    return (
      <div className="site__body">
        <div className="container">
          <div className="block-header__body">
          <div className="block-header__title"><h3>Loading...</h3>
            <button className="btn btn-light btn-loading btn-xl">
              <svg width="16" height="16">
                <path
                  d="M14,15h-4v-2h3v-3h2v4C15,14.6,14.6,15,14,15z M13,3h-3V1h4c0.6,0,1,0.4,1,1v4h-2V3z M6,3H3v3H1V2c0-0.6,0.4-1,1-1h4V3z
M3,13h3v2H2c-0.6,0-1-0.4-1-1v-4h2V13z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  const addToCartHandler = (product) => {
    const request = {
      discount_amount: "null",
      cart_amount:
        product.product_variations[0].variations[0].sell_price_inc_tax * count,
      cart_discount_amount: "null",
      cart_discount_type: "null",
      cart_discount_rate: "null",
      cart_coupon: "null",
      product_id: product.id,
      discount_rate: "null",
      discount_type: "null",
      quantity: count,
      amount:
        product.product_variations[0].variations[0].sell_price_inc_tax * count,
      coupon: "null",
      variation_id:
        product.product_variations[0].variations[0].product_variation_id,
    };

    dispatch(addToCart({ token, request }));
  };
  return (
    <div>
      <div className="site__body">
        <div className="block-header block-header--has-breadcrumb">
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
                    <NavLink to="/shop" className="breadcrumb__item-link">
                      Shop
                    </NavLink>
                  </li>
                  <li
                    className="breadcrumb__item breadcrumb__item--current breadcrumb__item--last"
                    aria-current="page"
                  >
                    <span className="breadcrumb__item-link">Current Page</span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="block-split">
          <div className="container">
            <div className="block-split__row row no-gutters">
              <div className="block-split__item block-split__item-content col-auto">
                <div className="product product--layout--full">
                  <div className="product__body">
                    <div className="product__card product__card--one" />
                    <div className="product__card product__card--two" />
                    <div
                      className="product-gallery product-gallery--layout--product-full product__gallery"
                      data-layout="product-full"
                    >
                      <div className="product-gallery__featured">
                        <button type="button" className="product-gallery__zoom">
                          <svg width={24} height={24}>
                            <path
                              d="M15,18c-2,0-3.8-0.6-5.2-1.7c-1,1.3-2.1,2.8-3.5,4.6c-2.2,2.8-3.4,1.9-3.4,1.9s-0.6-0.3-1.1-0.7
      c-0.4-0.4-0.7-1-0.7-1s-0.9-1.2,1.9-3.3c1.8-1.4,3.3-2.5,4.6-3.5C6.6,12.8,6,11,6,9c0-5,4-9,9-9s9,4,9,9S20,18,15,18z M15,2
      c-3.9,0-7,3.1-7,7s3.1,7,7,7s7-3.1,7-7S18.9,2,15,2z M16,13h-2v-3h-3V8h3V5h2v3h3v2h-3V13z"
                            />
                          </svg>
                        </button>
                        <div
                          className="image image--type--product"
                          href="images/products/product-2-700x700.jpg"
                          target="_blank"
                          data-width={700}
                          data-height={700}
                        >
                          <div className="image__body">
                            <img
                              className="image__tag"
                              src={
                                product.image
                                  ? product.image
                                  :"assets/images/no_image.jpeg"
                              }
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="owl-carousel">
                          {/*
            The data-width and data-height attributes must contain the size of a larger version
            of the product image.
  
            If you do not know the image size, you can remove the data-width and data-height
            attribute, in which case the width and height will be obtained from the naturalWidth
            and naturalHeight property of img.image__tag.
            */}
                          <a
                            className="image image--type--product"
                            href="images/products/product-2-700x700.jpg"
                            target="_blank"
                            data-width={700}
                            data-height={700}
                          >
                            <div className="image__body">
                              <img
                                className="image__tag"
                                src="images/products/product-2-500x500.jpg"
                                alt=""
                              />
                            </div>
                          </a>
                          {/*
            The data-width and data-height attributes must contain the size of a larger version
            of the product image.
  
            If you do not know the image size, you can remove the data-width and data-height
            attribute, in which case the width and height will be obtained from the naturalWidth
            and naturalHeight property of img.image__tag.
            */}
                          <a
                            className="image image--type--product"
                            href="images/products/product-1-700x700.jpg"
                            target="_blank"
                            data-width={700}
                            data-height={700}
                          >
                            <div className="image__body">
                              <img
                                className="image__tag"
                                src="images/products/product-1-500x500.jpg"
                                alt=""
                              />
                            </div>
                          </a>
                          {/*
            The data-width and data-height attributes must contain the size of a larger version
            of the product image.
  
            If you do not know the image size, you can remove the data-width and data-height
            attribute, in which case the width and height will be obtained from the naturalWidth
            and naturalHeight property of img.image__tag.
            */}
                          <a
                            className="image image--type--product"
                            href="images/products/product-3-700x700.jpg"
                            target="_blank"
                            data-width={700}
                            data-height={700}
                          ></a>
                          {/*
            The data-width and data-height attributes must contain the size of a larger version
            of the product image.
  
            If you do not know the image size, you can remove the data-width and data-height
            attribute, in which case the width and height will be obtained from the naturalWidth
            and naturalHeight property of img.image__tag.
            */}
                          <a
                            className="image image--type--product"
                            href="images/products/product-4-700x700.jpg"
                            target="_blank"
                            data-width={700}
                            data-height={700}
                          >
                            <div className="image__body">
                              <img
                                className="image__tag"
                                src="images/products/product-4-500x500.jpg"
                                alt=""
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="product-gallery__thumbnails">
                        <div className="owl-carousel">
                          <div className="product-gallery__thumbnails-item image image--type--product">
                            <div className="image__body">
                              <img
                                className="image__tag"
                                src="images/products/product-2-70x70.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="product-gallery__thumbnails-item image image--type--product">
                            <div className="image__body">
                              <img
                                className="image__tag"
                                src="images/products/product-1-70x70.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="product-gallery__thumbnails-item image image--type--product">
                            <div className="image__body">
                              <img
                                className="image__tag"
                                src="images/products/product-3-70x70.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="product-gallery__thumbnails-item image image--type--product">
                            <div className="image__body">
                              <img
                                className="image__tag"
                                src="images/products/product-4-70x70.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__header">
                      <h1 className="product__title">{product.name}</h1>
                      <div className="product__subtitle">
                        <div className="product__rating">
                          <div className="product__rating-stars">
                            <div className="rating">
                              <div className="rating__body">
                                <div className="rating__star rating__star--active" />
                                <div className="rating__star rating__star--active" />
                                <div className="rating__star rating__star--active" />
                                <div className="rating__star rating__star--active" />
                                <div className="rating__star" />
                              </div>
                            </div>
                          </div>
                          <div className="product__rating-label">
                            <a href="#">3.5 on 7 reviews</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product__main">
                      <div className="product__excerpt">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: product.product_description,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="product__info">
                      <div className="product__info-card">
                        <div className="product__info-body">
                          <div className="product__badge tag-badge tag-badge--sale">
                            Sale
                          </div>
                          <div className="product__prices-stock">
                            <div className="product__prices">
                              <div className="product__price product__price--current">
                                &#x20B9;{" "}
                                {parseFloat(
                                  product.product_variations[0].variations[0]
                                    .sell_price_inc_tax
                                ).toFixed(2)}
                              </div>
                            </div>
                            <div className="status-badge status-badge--style--success product__stock status-badge--has-text">
                              <div className="status-badge__body">
                                <div className="status-badge__text">
                                  In Stock
                                </div>
                                <div
                                  className="status-badge__tooltip"
                                  tabIndex={0}
                                  data-toggle="tooltip"
                                  title="In Stock"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="product__meta">
                            <table>
                              <tbody>
                                <tr>
                                  <th>SKU</th>
                                  <td>{product.sku}</td>
                                </tr>
                                <tr>
                                  <th>Brand</th>
                                  <td>
                                    <a href="#">{product.brand.name}</a>
                                  </td>
                                </tr>
                                <tr>
                                  <th>Category</th>
                                  <td>{product.category?.name}</td>
                                </tr>
                                <tr>
                                  <th>Origin</th>
                                  <td>{product.origin}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="product__actions">
                          <div className="product__actions-item product__actions-item--quantity">
                            <div className="input-number">
                              <input
                                className="input-number__input form-control form-control-lg"
                                type="number"
                                min={1}
                                value={count}
                                onChange={(e) => e.target.value}
                              />
                              <div
                                className="input-number__add"
                                onClick={() => setCount(count + 1)}
                              />
                              <div
                                className="input-number__sub"
                                onClick={() =>
                                  setCount(count > 1 ? count - 1 : 1)
                                }
                              />
                            </div>
                          </div>
                          <div className="product__actions-item product__actions-item--addtocart">
                            <button
                              className="btn btn-primary btn-lg btn-block"
                              onClick={() => {
                                addToCartHandler(product);
                              }}
                            >
                              Add to cart
                            </button>
                          </div>
                          <div className="product__actions-divider" />
                         
                        </div>
                      </div>



                      




                    </div>

                    
                    <div className="product__tabs product-tabs product-tabs--layout--full">
                      <ul className="product-tabs__list">
                        <li className="product-tabs__item product-tabs__item--active">
                          <a data-bs-toggle="tab" href="/product-tab-description" onClick={(e)=>e.preventDefault()}>
                            Description
                          </a>
                        </li>
                        <li className="product-tabs__item">
                          <a data-bs-toggle="tab" href="#product-tab-specification" onClick={(e)=>e.preventDefault()}>Specification</a>
                        </li>
                        <li className="product-tabs__item">
                          <a data-bs-toggle="tab" href="#product-tab-reviews" onClick={(e)=>e.preventDefault()}>
                            Reviews
                            <span className="product-tabs__item-counter">
                              3
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="product-tabs__content">
                        <div
                          className="product-tabs__pane product-tabs__pane--active"
                          id="product-tab-description"
                        >
                          <div className="typography">
                            <p>
                            Why: We believe that on-road mobility [personal, shared and freight] is an integral part of society, that needs the right fluidity for its optimal utilization, enhanced up-time, longevity and reduced cost of ownership,

                            How: By addressing the organized, semi-organized and unorganized automotive aftermarket, providing spares and accessories through an optimal blend of online and offline channels, supported by a robust supply chain, thereby enhancing the economic and non-economic returns of all our stakeholders.
                            
                            What: A platform that caters to the requirements of our potential customers in the spares and accessories space. The platform ensures the right access, quality, delivery cycles and a broad range of components that ensures customer delight each and every time they connect with us.
                            </p>
                          </div>
                        </div>
                        <div
                          className="product-tabs__pane"
                          id="product-tab-specification"
                        >
                          <div className="spec">
                            <div className="spec__section">
                              <h4 className="spec__section-title">General</h4>
                              <div className="spec__row">
                                <div className="spec__name">Material</div>
                                <div className="spec__value">
                                  Aluminium, Plastic
                                </div>
                              </div>
                              <div className="spec__row">
                                <div className="spec__name">Engine Type</div>
                                <div className="spec__value">Brushless</div>
                              </div>
                              <div className="spec__row">
                                <div className="spec__name">
                                  Battery Voltage
                                </div>
                                <div className="spec__value">18 V</div>
                              </div>
                              <div className="spec__row">
                                <div className="spec__name">Battery Type</div>
                                <div className="spec__value">Li-lon</div>
                              </div>
                              <div className="spec__row">
                                <div className="spec__name">
                                  Number of Speeds
                                </div>
                                <div className="spec__value">2</div>
                              </div>
                              <div className="spec__row">
                                <div className="spec__name">Charge Time</div>
                                <div className="spec__value">1.08 h</div>
                              </div>
                              <div className="spec__row">
                                <div className="spec__name">Weight</div>
                                <div className="spec__value">1.5 kg</div>
                              </div>
                            </div>
                            <div className="spec__section">
                              <h4 className="spec__section-title">
                                Dimensions
                              </h4>
                              <div className="spec__row">
                                <div className="spec__name">Length</div>
                                <div className="spec__value">99 mm</div>
                              </div>
                              <div className="spec__row">
                                <div className="spec__name">Width</div>
                                <div className="spec__value">207 mm</div>
                              </div>
                              <div className="spec__row">
                                <div className="spec__name">Height</div>
                                <div className="spec__value">208 mm</div>
                              </div>
                            </div>
                            <div className="spec__disclaimer">
                              Information on technical characteristics, the
                              delivery set, the country of manufacture and the
                              appearance of the goods is for reference only and
                              is based on the latest information available at
                              the time of publication.
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-tabs__pane"
                          id="product-tab-reviews"
                        >
                          <div className="reviews-view">
                            <div className="reviews-view__list">
                              <div className="reviews-list">
                                <ol className="reviews-list__content">
                                  <li className="reviews-list__item">
                                    <div className="review">
                                      <div className="review__body">
                                        <div className="review__avatar">
                                          <img
                                            src="images/avatars/avatar-1-42x42.jpg"
                                            alt=""
                                          />
                                        </div>
                                        <div className="review__meta">
                                          <div className="review__author">
                                            Samantha Smith
                                          </div>
                                          <div className="review__date">
                                            27 May, 2018
                                          </div>
                                        </div>
                                        <div className="review__rating">
                                          <div className="rating">
                                            <div className="rating__body">
                                              <div className="rating__star rating__star--active" />
                                              <div className="rating__star rating__star--active" />
                                              <div className="rating__star rating__star--active" />
                                              <div className="rating__star rating__star--active" />
                                              <div className="rating__star" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="review__content typography">
                                          Phasellus id mattis nulla. Mauris
                                          velit nisi, imperdiet vitae sodales
                                          in, maximus ut lectus. Vivamus commodo
                                          scelerisque lacus, at porttitor dui
                                          iaculis id. Curabitur imperdiet
                                          ultrices fermentum.
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="reviews-list__item">
                                    <div className="review">
                                      <div className="review__body">
                                        <div className="review__avatar">
                                          <img
                                            src="images/avatars/avatar-2-42x42.jpg"
                                            alt=""
                                          />
                                        </div>
                                        <div className="review__meta">
                                          <div className="review__author">
                                            Adam Taylor
                                          </div>
                                          <div className="review__date">
                                            12 April, 2018
                                          </div>
                                        </div>
                                        <div className="review__rating">
                                          <div className="rating">
                                            <div className="rating__body">
                                              <div className="rating__star rating__star--active" />
                                              <div className="rating__star rating__star--active" />
                                              <div className="rating__star rating__star--active" />
                                              <div className="rating__star" />
                                              <div className="rating__star" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="review__content typography">
                                          Aenean non lorem nisl. Duis tempor
                                          sollicitudin orci, eget tincidunt ex
                                          semper sit amet. Nullam neque justo,
                                          sodales congue feugiat ac, facilisis a
                                          augue. Donec tempor sapien et
                                          fringilla facilisis. Nam maximus
                                          consectetur diam. Nulla ut ex mollis,
                                          volutpat tellus vitae, accumsan
                                          ligula.
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="reviews-list__item">
                                    <div className="review">
                                      <div className="review__body">
                                        <div className="review__avatar">
                                          <img
                                            src="images/avatars/avatar-3-42x42.jpg"
                                            alt=""
                                          />
                                        </div>
                                        <div className="review__meta">
                                          <div className="review__author">
                                            Helena Garcia
                                          </div>
                                          <div className="review__date">
                                            2 January, 2018
                                          </div>
                                        </div>
                                        <div className="review__rating">
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
                                        <div className="review__content typography">
                                          Duis ac lectus scelerisque quam
                                          blandit egestas. Pellentesque
                                          hendrerit eros laoreet suscipit
                                          ultrices.
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ol>
                                <div className="reviews-list__pagination">
                                  <ul className="pagination">
                                    <li className="page-item disabled">
                                      <a
                                        className="page-link page-link--with-arrow"
                                        href="#"
                                        aria-label="Previous"
                                      >
                                        <span
                                          className="page-link__arrow page-link__arrow--left"
                                          aria-hidden="true"
                                        >
                                          <svg width={7} height={11}>
                                            <path d="M6.7,0.3L6.7,0.3c-0.4-0.4-0.9-0.4-1.3,0L0,5.5l5.4,5.2c0.4,0.4,0.9,0.3,1.3,0l0,0c0.4-0.4,0.4-1,0-1.3l-4-3.9l4-3.9C7.1,1.2,7.1,0.6,6.7,0.3z" />
                                          </svg>
                                        </span>
                                      </a>
                                    </li>
                                    <li className="page-item">
                                      <a className="page-link" href="#">
                                        1
                                      </a>
                                    </li>
                                    <li
                                      className="page-item active"
                                      aria-current="page"
                                    >
                                      <span className="page-link">
                                        2
                                        <span className="sr-only">
                                          (current)
                                        </span>
                                      </span>
                                    </li>
                                    <li className="page-item">
                                      <a className="page-link" href="#">
                                        3
                                      </a>
                                    </li>
                                    <li className="page-item">
                                      <a className="page-link" href="#">
                                        4
                                      </a>
                                    </li>
                                    <li className="page-item page-item--dots">
                                      <div className="pagination__dots" />
                                    </li>
                                    <li className="page-item">
                                      <a className="page-link" href="#">
                                        9
                                      </a>
                                    </li>
                                    <li className="page-item">
                                      <a
                                        className="page-link page-link--with-arrow"
                                        href="#"
                                        aria-label="Next"
                                      >
                                        <span
                                          className="page-link__arrow page-link__arrow--right"
                                          aria-hidden="true"
                                        >
                                          <svg width={7} height={11}>
                                            <path
                                              d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
      C-0.1,9.8-0.1,10.4,0.3,10.7z"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <form className="reviews-view__form">
                              <h3 className="reviews-view__header">
                                Write A Review
                              </h3>
                              <div className="row">
                                <div className="col-xxl-8 col-xl-10 col-lg-9 col-12">
                                  <div className="form-row">
                                    <div className="form-group col-md-4">
                                      <label htmlFor="review-stars">
                                        Review Stars
                                      </label>
                                      <select
                                        id="review-stars"
                                        className="form-control"
                                      >
                                        <option>5 Stars Rating</option>
                                        <option>4 Stars Rating</option>
                                        <option>3 Stars Rating</option>
                                        <option>2 Stars Rating</option>
                                        <option>1 Stars Rating</option>
                                      </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                      <label htmlFor="review-author">
                                        Your Name
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="review-author"
                                        placeholder="Your Name"
                                      />
                                    </div>
                                    <div className="form-group col-md-4">
                                      <label htmlFor="review-email">
                                        Email Address
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="review-email"
                                        placeholder="Email Address"
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="review-text">
                                      Your Review
                                    </label>
                                    <textarea
                                      className="form-control"
                                      id="review-text"
                                      rows={6}
                                      defaultValue={""}
                                    />
                                  </div>
                                  <div className="form-group mb-0 mt-4">
                                    <button
                                      type="submit"
                                      className="btn btn-primary"
                                    >
                                      Post Your Review
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>





                    
                  </div>
                </div>
                <div className="block-space block-space--layout--divider-nl" />
              </div>
            </div>
          </div>
        </div>
        <div className="block-space block-space--layout--before-footer" />
      </div>
    </div>
  );
};

export default ProductDetails;
