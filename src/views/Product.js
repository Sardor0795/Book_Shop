import React, { useState } from "react";
import Advan from "../components/advan";
import Breadcrumbs from "../components/breadcrumbs";
import Sale from "../components/sale";
import Sub from "../components/sub";

import "../assets/css/product.scss";

import book from "../assets/img/book.jpg";
import shipping from "../assets/img/shipping.svg";
import stocks from "../assets/img/stocks.svg";
import like from "../assets/img/like.svg";
import review from "../assets/img/review.svg";
import star from "../assets/img/star.svg";
import cart from "../assets/img/cart.svg";
import vcart from "../assets/img/vcart.svg";
import sort from "../assets/img/sort.svg";
import { Link } from "react-router-dom";

const Product = () => {
  const [count, setCount] = useState(1);
  const [toggleTab, setToggleTab] = useState(true);

  return (
    <div>
      <Breadcrumbs />
      <div className="container">
        <div className="product">
          <div
            className="product__img"
            style={{ backgroundImage: `url(${book})` }}
          ></div>
          <div className="product__right">
            <div className="product__title">All Good News</div>
            <div className="d-flex align-items-center">
              <div className="product__stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <div className="product__b">4.0</div>
              <div className="product__reviews d-flex align-items-center">
                <img src={review} alt="" />
                235 Reviews
              </div>
              <div className="product__reviews d-flex align-items-center">
                <img src={like} alt="" />
                456k Like
              </div>
            </div>
            <div className="product__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem
              </p>
            </div>
            <div className="d-flex align-items-center">
              <div className="product__author"></div>
              <div className="product__item">
                <div className="lprobox__name">Writen by</div>
                <div className="lprobox__value">Kevin Smiley</div>
              </div>
              <div className="product__item">
                <div className="lprobox__name">Writen by</div>
                <div className="lprobox__value">Kevin Smiley</div>
              </div>
              <div className="product__item">
                <div className="lprobox__name">Writen by</div>
                <div className="lprobox__value">Kevin Smiley</div>
              </div>
              <span className="product__shipping">
                <img src={shipping} alt="" />
                FREE SHIPPING
              </span>
              <span className="product__stocks">
                <img src={stocks} alt="" />
                IN SOTCKS
              </span>
            </div>
            <div className="product__bottom">
              <div className="product__newprice">$15,63</div>
              <div className="product__oldprice">$16,99</div>
              <div className="product__sale">2%</div>
              <div className="product__count">
                <button
                  className="product__count--less"
                  onClick={() => {
                    if (count > 0) setCount(count - 1);
                  }}
                ></button>
                <div className="product__count--value">{count}</div>
                <button
                  className="product__count--more"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                ></button>
              </div>
              <button className="btn btn__bg">
                <img src={cart} alt="" />
                Add to cart
              </button>
              <button className="btn btn__outline">
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5204 2.27344C18.9935 1.74649 18.368 1.32849 17.6796 1.0433C16.9912 0.758113 16.2533 0.611328 15.5082 0.611328C14.763 0.611328 14.0252 0.758113 13.3368 1.0433C12.6483 1.32849 12.0228 1.74649 11.496 2.27344L10.9999 2.76953L10.5038 2.27344C9.97694 1.74649 9.35145 1.32849 8.66302 1.0433C7.9746 0.758113 7.23675 0.611328 6.49159 0.611328C5.74644 0.611328 5.00858 0.758113 4.32016 1.0433C3.63174 1.32849 3.00624 1.74649 2.47938 2.27344C0.778213 3.97412 0.481383 6.59424 1.68638 9.28271C3.15513 12.561 10.034 18.8608 10.326 19.1274C10.5102 19.2955 10.7505 19.3886 10.9999 19.3886C11.2492 19.3886 11.4895 19.2955 11.6737 19.1274C11.9657 18.8608 18.8446 12.561 20.3133 9.28223C21.5184 6.59424 21.2216 3.97412 19.5204 2.27344ZM18.4892 8.46436C17.5194 10.6274 13.2401 14.915 10.9999 17.0244C8.75966 14.915 4.48134 10.6289 3.51063 8.46484C3.10243 7.55225 2.32118 5.25977 3.89344 3.6875C4.58252 2.99844 5.5171 2.61133 6.49159 2.61133C7.46608 2.61133 8.40066 2.99844 9.08973 3.6875L10.2929 4.89063C10.3857 4.98351 10.4959 5.05719 10.6173 5.10745C10.7386 5.15772 10.8686 5.1836 10.9999 5.1836C11.1312 5.1836 11.2613 5.15772 11.3826 5.10745C11.5039 5.05719 11.6141 4.98351 11.707 4.89063L12.9101 3.6875C13.6102 3.01967 14.5406 2.64709 15.5082 2.64709C16.4758 2.64709 17.4062 3.01967 18.1063 3.6875C19.6786 5.25977 18.8974 7.55225 18.4892 8.46436Z"
                    fill="#11142D"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-9 col-md-12">
            <div className="product__tabs">
              <button
                className={toggleTab ? "active htitle" : " htitle"}
                onClick={() => {
                  setToggleTab(true);
                }}
              >
                Details Product
              </button>
              <button
                className={!toggleTab ? "active htitle" : " htitle"}
                onClick={() => {
                  setToggleTab(false);
                }}
              >
                Customer Reviews
              </button>
            </div>
            <div className="product__content">
              {toggleTab ? (
                <div className="product__atribut">
                  <table>
                    <tr>
                      <td>Book Title</td>
                      <td>All Good News</td>
                    </tr>
                    <tr>
                      <td>Book Title</td>
                      <td>All Good News</td>
                    </tr>
                    <tr>
                      <td>Book Title</td>
                      <td>
                        <Link to="/">Drama</Link>
                        <Link to="/">Drama</Link>
                        <Link to="/">Drama</Link>
                        <Link to="/">Drama</Link>
                        <Link to="/">Drama</Link>
                      </td>
                    </tr>
                  </table>
                </div>
              ) : (
                <div className="product__review">
                  <div className="reviews">
                    <div className="reviews__main mb-3">
                      <div className="reviews__main--info">
                        <div className="reviews__title">Rating Information</div>
                        <div className="reviews__text">
                          "Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim
                        </div>
                      </div>
                      <div className="reviews__main--score">
                        <div className="reviews__main--item">
                          <img src={star} alt="" />
                          <span>5</span>
                          <div className="reviews__main--line">
                            <span style={{ width: "80%" }}></span>
                          </div>
                          <div className="reviews__main--value">86%</div>
                        </div>
                        <div className="reviews__main--item">
                          <img src={star} alt="" />
                          <span>5</span>
                          <div className="reviews__main--line">
                            <span style={{ width: "80%" }}></span>
                          </div>
                          <div className="reviews__main--value">86%</div>
                        </div>
                      </div>
                      <div className="reviews__main--right">
                        <div className="d-flex align-items-center">
                          <div className="reviews__main--big">4.7</div>
                          <div className="reviews__main--out">out of 5</div>
                        </div>
                        <div>
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="reviews__top d-flex align-items-center justify-content-between mb-3">
                      <span>Showing 4 of 20 reviews</span>
                      <div className="cat__sort">
                        <img src={sort} alt="" />
                        <select className="cat__select">
                          <option value="">Narx kamayishi</option>
                          <option value="">Narx kamayishi</option>
                          <option value="">Narx kamayishi</option>
                          <option value="">Narx kamayishi</option>
                          <option value="">Narx kamayishi</option>
                        </select>
                      </div>
                    </div>
                    <div className="reviews__list">
                      <div className="reviews__box">
                        <div className="reviews__box--left">
                          <div className="reviews__box--author">
                            <div className="reviews__box--avatar"></div>
                            <div>
                              <div className="reviews__box--name">
                                David Here
                              </div>
                              <div className="reviews__box--date">
                                Jan 4th, 2020
                              </div>
                            </div>
                          </div>
                          <div className="reviews__box--text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex
                          </div>
                        </div>
                        <div className="reviews__box--right">
                          <div className="reviews__box--value">4.0</div>
                          <div className="reviews__box--stars">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="reviews__box">
                        <div className="reviews__box--left">
                          <div className="reviews__box--author">
                            <div className="reviews__box--avatar"></div>
                            <div>
                              <div className="reviews__box--name">
                                David Here
                              </div>
                              <div className="reviews__box--date">
                                Jan 4th, 2020
                              </div>
                            </div>
                          </div>
                          <div className="reviews__box--text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex
                          </div>
                        </div>
                        <div className="reviews__box--right">
                          <div className="reviews__box--value">4.0</div>
                          <div className="reviews__box--stars">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                          </div>
                        </div>
                      </div>
                      <button className="btn btn__bg btn__full">
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-3 col-md-12">
            <div className="htitle">Related Books</div>
            <div className="rel">
              <div
                className="rel__img"
                style={{ backgroundImage: `url(${book})` }}
              ></div>
              <div className="rel__info">
                <Link to="/" className="rel__title">
                  Terrible Madness
                </Link>
                <div className="rel__genre">THRILLE, DRAMA, HORROR</div>
                <div className="rel__review">
                  <img src={star} alt="" />
                  <div>4.7</div>
                  <span>244 reviews</span>
                </div>
                <div className="rel__price">
                  <div className="rel__price--new">$45.4</div>
                  <div className="rel__price--old">$98.4</div>
                </div>
                <button className="rel__cart">
                  <img src={vcart} alt="" />
                  Add to cart
                </button>
              </div>
            </div>
            <div className="rel">
              <div
                className="rel__img"
                style={{ backgroundImage: `url(${book})` }}
              ></div>
              <div className="rel__info">
                <Link to="/" className="rel__title">
                  Terrible Madness
                </Link>
                <div className="rel__genre">THRILLE, DRAMA, HORROR</div>
                <div className="rel__review">
                  <img src={star} alt="" />
                  <div>4.7</div>
                  <span>244 reviews</span>
                </div>
                <div className="rel__price">
                  <div className="rel__price--new">$45.4</div>
                  <div className="rel__price--old">$98.4</div>
                </div>
                <button className="rel__cart">
                  <img src={vcart} alt="" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sale />
      <div className="advanlong">
        <div className="container">
          <Advan />
        </div>
      </div>
      <Sub />
    </div>
  );
};

export default Product;
