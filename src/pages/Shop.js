import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import api from "../apiServises/api";
import { addToCart } from "../features/cart/cartSlice";
import {
  getAllProducts,
  getHome,
  getHomeData,
  getProducts,
} from "../features/home/homeSlice";
import { getUser } from "../features/user/userSlice";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHome());
    dispatch(getProducts());
  }, [dispatch]);
  const allProduct = useSelector(getAllProducts);
  const homeData = useSelector(getHomeData);
  const user = useSelector(getUser);
  let token = user?.api_token || user?.access_token;
  let brands = homeData?.brand;
  let categories = homeData?.categories;
  const addToCartHandler = (product) => {
    const request = {
      discount_amount: "null",
      cart_amount:
        product.product_variations[0].variations[0].sell_price_inc_tax ,
      cart_discount_amount: "null",
      cart_discount_type: "null",
      cart_discount_rate: "null",
      cart_coupon: "null",
      product_id: product.id,
      discount_rate: "null",
      discount_type: "null",
      quantity: 1,
      amount:
        product.product_variations[0].variations[0].sell_price_inc_tax ,
      coupon: "null",
      variation_id:
        product.product_variations[0].variations[0].product_variation_id,
  };

    dispatch(addToCart({token, request}));
  }

  const location = useLocation();
  let index = -1;
  if (location.state) index = location.state;
  
  const [products, setProducts] = useState(allProduct?.data);
  const [checkedBrands, setCheckedBrands] = useState(
    new Array(brands?.length).fill(false)
  );
  const [checkedCate, setCheckedCate] = useState(
    new Array(categories?.length).fill(false)
  );
  const [b_id, setB_id] = useState([]);
  const [c_id, setC_id] = useState([]);
  let para = {};
  if (b_id.length > 0) para.brands = b_id;
  if (c_id.length > 0) para.categories = c_id;

  useEffect( () => {
    // console.log(para)
    const filterProduct = async () => {
      if (b_id.length > 0 || c_id.length > 0) {
        const res = await api.post("/products", para);
        if (res) {
          setProducts(res.data.output.data);
        }
      } else {
        setProducts(allProduct.data)
      }
    }
    filterProduct();
    
  }, [ b_id, c_id]);
  useEffect( () => {
    const filterProduct = async () => {
      if (index !== -1) {
        if (index.type === 'c') {
          checkedCate.fill(false);
          checkedCate[index.id] = true;
          para.categories = [index._id];
        }
        if (index.type === 'b') {
          checkedBrands[index.id] = true;
          para.brands = [index._id];
        }
        // console.log(para);
      }
      const res = await api.post("/products", para);
      if (res) {
        setProducts(res.data.output.data);
      }
    }
    filterProduct();
  }, [location.state]);

  const handleOnChange = (id, position) => {
    const updatedCheckedBrands = checkedBrands.map((item, idx) =>
      idx === position ? !item : item
    );

    setCheckedBrands(updatedCheckedBrands);
    console.log(updatedCheckedBrands);

    let new_brand_arr = updatedCheckedBrands.map((currentState, i) => {
      if (currentState === true) {
        return brands[i].id;
      }
    });
    new_brand_arr = new_brand_arr.filter((i) => i);
    console.log(new_brand_arr);
    setB_id(new_brand_arr);
  };
  const handleOnChangeC = (id, position) => {
    const updatedCheckedCate = checkedCate.map((item, idx) =>
      idx === position ? !item : item
    );

    setCheckedCate(updatedCheckedCate);
    console.log(updatedCheckedCate);

    let new_cate_arr = updatedCheckedCate.map((currentState, i) => {
      if (currentState === true) {
        return categories[i].id;
      }
    });
    new_cate_arr = new_cate_arr.filter((i) => i);
    setC_id(new_cate_arr);
  };

  return (
    <div>
      <div className="block-header block-header--has-breadcrumb block-header--has-title">
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
                  className="breadcrumb__title-safe-area"
                  role="presentation"
                />
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="block-split block-split--has-sidebar">
        <div className="container-fluid">
          <div className="container-fluid">
          <div className="block-split__row row no-gutters">
            <div className="block-split__item block-split__item-sidebar col-auto">
              <div className="sidebar sidebar--offcanvas--mobile">
                <div className="sidebar__backdrop" />
                <div className="sidebar__body">
                  <div className="sidebar__header">
                    <div className="sidebar__title">Filters</div>
                    <button className="sidebar__close" type="button">
                      <svg width={12} height={12}>
                        <path
                          d="M10.8,10.8L10.8,10.8c-0.4,0.4-1,0.4-1.4,0L6,7.4l-3.4,3.4c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L4.6,6L1.2,2.6
	c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L6,4.6l3.4-3.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L7.4,6l3.4,3.4
	C11.2,9.8,11.2,10.4,10.8,10.8z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="sidebar__content">
                    <div
                      className="widget widget-filters widget-filters--offcanvas--mobile"
                      data-collapse
                      data-collapse-opened-class="filter--opened"
                    >
                      <div className="widget__header widget-filters__header">
                        <h4>Filters</h4>
                      </div>
                      <div className="widget-filters__list">
                        <div className="widget-filters__item">
                          <div
                            className="filter filter--opened"
                            data-collapse-item
                          >
                            <button
                              type="button"
                              className="filter__title"
                              data-collapse-trigger
                            >
                              Categories
                              <span className="filter__arrow">
                                <svg width="12px" height="7px">
                                  <path d="M0.286,0.273 L0.286,0.273 C-0.070,0.629 -0.075,1.204 0.276,1.565 L5.516,6.993 L10.757,1.565 C11.108,1.204 11.103,0.629 10.747,0.273 L10.747,0.273 C10.385,-0.089 9.796,-0.086 9.437,0.279 L5.516,4.296 L1.596,0.279 C1.237,-0.086 0.648,-0.089 0.286,0.273 Z" />
                                </svg>
                              </span>
                            </button>
                            <div className="filter__body" data-collapse-content>
                              <div className="filter__container">
                                <div className="filter-list">
                                  <div className="filter-list__list">
                                    {categories?.map((cate, idx) => {
                                      return (
                                        <label className="filter-list__item" key={idx}>
                                          <span className="input-check filter-list__input">
                                            <span className="input-check__body">
                                              <input
                                                className="input-check__input"
                                                type="checkbox"
                                                name={cate.name}
                                                value={cate.id}
                                                checked={checkedCate[idx]}
                                                onChange={(event) =>
                                                  handleOnChangeC(
                                                    event.target.value,
                                                    idx
                                                  )
                                                }
                                              />
                                              <span className="input-check__box" />
                                              <span className="input-check__icon">
                                                <svg width="9px" height="7px">
                                                  <path d="M9,1.395L3.46,7L0,3.5L1.383,2.095L3.46,4.2L7.617,0L9,1.395Z" />
                                                </svg>{" "}
                                              </span>
                                            </span>
                                          </span>
                                          <span className="filter-list__title">
                                            {cate.name}{" "}
                                          </span>
                                        </label>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="widget-filters__item">
                          <div
                            className="filter filter--opened"
                            data-collapse-item
                          >
                            <button
                              type="button"
                              className="filter__title"
                              data-collapse-trigger
                            >
                              Brands
                              <span className="filter__arrow">
                                <svg width="12px" height="7px">
                                  <path d="M0.286,0.273 L0.286,0.273 C-0.070,0.629 -0.075,1.204 0.276,1.565 L5.516,6.993 L10.757,1.565 C11.108,1.204 11.103,0.629 10.747,0.273 L10.747,0.273 C10.385,-0.089 9.796,-0.086 9.437,0.279 L5.516,4.296 L1.596,0.279 C1.237,-0.086 0.648,-0.089 0.286,0.273 Z" />
                                </svg>
                              </span>
                            </button>
                            <div className="filter__body" data-collapse-content>
                              <div className="filter__container">
                                <div className="filter-list">
                                  <div className="filter-list__list">
                                    {brands?.map((brand, idx) => {
                                      return (
                                        <label
                                          className="filter-list__item"
                                          key={idx}
                                        >
                                          <span className="input-check filter-list__input">
                                            <span className="input-check__body">
                                              <input
                                                className="input-check__input"
                                                type="checkbox"
                                                name={brand.name}
                                                value={brand.id}
                                                checked={checkedBrands[idx]}
                                                onChange={(event) =>
                                                  handleOnChange(
                                                    event.target.value,
                                                    idx
                                                  )
                                                }
                                              />
                                              <span className="input-check__box" />
                                              <span className="input-check__icon">
                                                <svg width="9px" height="7px">
                                                  <path d="M9,1.395L3.46,7L0,3.5L1.383,2.095L3.46,4.2L7.617,0L9,1.395Z" />
                                                </svg>{" "}
                                              </span>
                                            </span>
                                          </span>
                                          <span className="filter-list__title">
                                            {brand.name}{" "}
                                          </span>
                                        </label>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="widget-filters__actions d-flex">
                        <button className="btn btn-primary btn-sm">
                          Filter
                        </button>
                        <button className="btn btn-secondary btn-sm">
                          Reset
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-split__item block-split__item-content col-auto">
              <div className="block">
                <div className="products-view">
                  <div className="products-view__options view-options view-options--offcanvas--mobile">
                    <div className="view-options__body">
                      <button
                        type="button"
                        className="view-options__filters-button filters-button"
                      >
                        <span className="filters-button__icon">
                          <svg width={16} height={16}>
                            <path
                              d="M7,14v-2h9v2H7z M14,7h2v2h-2V7z M12.5,6C12.8,6,13,6.2,13,6.5v3c0,0.3-0.2,0.5-0.5,0.5h-2
	C10.2,10,10,9.8,10,9.5v-3C10,6.2,10.2,6,10.5,6H12.5z M7,2h9v2H7V2z M5.5,5h-2C3.2,5,3,4.8,3,4.5v-3C3,1.2,3.2,1,3.5,1h2
	C5.8,1,6,1.2,6,1.5v3C6,4.8,5.8,5,5.5,5z M0,2h2v2H0V2z M9,9H0V7h9V9z M2,14H0v-2h2V14z M3.5,11h2C5.8,11,6,11.2,6,11.5v3
	C6,14.8,5.8,15,5.5,15h-2C3.2,15,3,14.8,3,14.5v-3C3,11.2,3.2,11,3.5,11z"
                            />
                          </svg>{" "}
                        </span>
                        <span className="filters-button__title">Filters</span>
                        <span className="filters-button__counter">3</span>
                      </button>
                    </div>
                    <div className="view-options__body view-options__body--filters">
                      <div className="view-options__label">Active Filters</div>
                      <div className="applied-filters">
                        {/* <ul className="applied-filters__list">
                          <li className="applied-filters__item">
                            <a
                              href="#"
                              className="applied-filters__button applied-filters__button--filter"
                            >
                              Sales: Top Sellers
                              <svg width={9} height={9}>
                                <path d="M9,8.5L8.5,9l-4-4l-4,4L0,8.5l4-4l-4-4L0.5,0l4,4l4-4L9,0.5l-4,4L9,8.5z" />
                              </svg>
                            </a>
                          </li>
                          <li className="applied-filters__item">
                            <a
                              href="#"
                              className="applied-filters__button applied-filters__button--filter"
                            >
                              Color: True Red
                              <svg width={9} height={9}>
                                <path d="M9,8.5L8.5,9l-4-4l-4,4L0,8.5l4-4l-4-4L0.5,0l4,4l4-4L9,0.5l-4,4L9,8.5z" />
                              </svg>
                            </a>
                          </li>
                          <li className="applied-filters__item">
                            <button
                              type="button"
                              className="applied-filters__button applied-filters__button--clear"
                            >
                              Clear All
                            </button>
                          </li>
                        </ul> */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="products-view__list products-list products-list--grid--4"
                    data-layout="grid"
                    data-with-features="false"
                  >
                    {/* <div className="products-list__head">
                      <div className="products-list__column products-list__column--image">
                        Image
                      </div>
                      <div className="products-list__column products-list__column--meta">
                        SKU
                      </div>
                      <div className="products-list__column products-list__column--product">
                        Product
                      </div>
                      <div className="products-list__column products-list__column--rating">
                        Rating
                      </div>
                      <div className="products-list__column products-list__column--price">
                        Price
                      </div>
                    </div> */}
                    <div className="products-list__content">
                      {products?.map((prod, idx) => {
                        return (
                          <div className="products-list__item" key={idx}>
                            <div className="product-card">
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
                                          ? prod.image
                                          :"assets/images/no_image.jpeg"
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
                                <div className="product-card__name">
                                  <div>
                                    <div className="product-card__badges">
                                      <div className="tag-badge tag-badge--sale">
                                        sale
                                      </div>
                                    </div>
                                    <NavLink to="/product-details"
                                    state={{ id: `${prod.id}` }}>{prod.name}</NavLink>
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
                                    &#x20B9;{' '}
                                    {parseFloat(
                                      prod.product_variations[0].variations[0]
                                        .sell_price_inc_tax
                                    ).toFixed(2)}
                                  </div>
                                  <div className="product-card__price product-card__price--old">
                                    &#x20B9;{' '}
                                    {parseFloat(
                                      prod.product_variations[0].variations[0]
                                        .sell_price_inc_tax
                                    ).toFixed(2)}
                                  </div>
                                </div>
                                <button
                                  className="product-card__addtocart-icon"
                                  type="button"
                                  aria-label="Add to cart"
                                  onClick={()=>addToCartHandler(prod)}
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
                                <button
                                  className="product-card__addtocart-full"
                                  type="button"
                                >
                                  Add to cart
                                </button>
                                <button
                                  className="product-card__wishlist"
                                  type="button"
                                >
                                  <svg width={16} height={16}>
                                    <path
                                      d="M13.9,8.4l-5.4,5.4c-0.3,0.3-0.7,0.3-1,0L2.1,8.4c-1.5-1.5-1.5-3.8,0-5.3C2.8,2.4,3.8,2,4.8,2s1.9,0.4,2.6,1.1L8,3.7
        l0.6-0.6C9.3,2.4,10.3,2,11.3,2c1,0,1.9,0.4,2.6,1.1C15.4,4.6,15.4,6.9,13.9,8.4z"
                                    />
                                  </svg>
                                  <span>Add to wishlist</span>
                                </button>
                                <button
                                  className="product-card__compare"
                                  type="button"
                                >
                                  <svg width={16} height={16}>
                                    <path d="M9,15H7c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v12C10,14.6,9.6,15,9,15z" />
                                    <path d="M1,9h2c0.6,0,1,0.4,1,1v4c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1v-4C0,9.4,0.4,9,1,9z" />
                                    <path d="M15,5h-2c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V6C16,5.4,15.6,5,15,5z" />
                                  </svg>
                                  <span>Add to compare</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* <div className="products-view__pagination">
                    <nav aria-label="Page navigation example">
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
                        <li className="page-item active" aria-current="page">
                          <span className="page-link">
                            2 <span className="sr-only">(current)</span>
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
                    </nav>
                    <div className="products-view__pagination-legend">
                      Showing 6 of 98 products
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="block-space block-space--layout--before-footer" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Shop;
