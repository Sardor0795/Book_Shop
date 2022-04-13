import React, { useState } from "react";
import { Link } from "react-router-dom";
import Advan from "../components/advan";
import Breadcrumbs from "../components/breadcrumbs";
import Sale from "../components/sale";
import Sub from "../components/sub";

import "../assets/css/category.scss";
import sort from "../assets/img/sort.svg";
import Grid from "../components/product/grid";

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import List from "../components/product/list";

const Category = () => {
  const [value, setValue] = useState({ min: 200, max: 900 });
  const [toggleProduct, setToggleProduct] = useState(false);
  return (
    <div>
      <Breadcrumbs />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="btitle">Filter</div>
            <div className="filter__box">
              <div
                className="filter__title"
                onClick={(event) => {
                  event.target.classList.toggle("open");
                }}
              >
                Editor Picks
              </div>
              <div className="filter__body">
                <div className="dropdown">
                  <div
                    className="dropdown__title"
                    onClick={(event) => {
                      event.target.classList.toggle("open");
                    }}
                  >
                    Best Sales <span>(105)</span>
                  </div>
                  <ul className="dropdown__list">
                    <li>
                      <Link to="/">Alone Here</Link>
                    </li>
                    <li>
                      <Link to="/">Alone Here</Link>
                    </li>
                    <li>
                      <Link to="/">Alone Here</Link>
                    </li>
                    <li>
                      <Link to="/">Alone Here</Link>
                    </li>
                    <li>
                      <Link to="/">Alone Here</Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <div
                    className="dropdown__title"
                    onClick={(event) => {
                      event.target.classList.toggle("open");
                    }}
                  >
                    Best Sales <span>(105)</span>
                  </div>
                  <ul className="dropdown__list">
                    <li>
                      <Link to="/">Alone Here</Link>
                    </li>
                    <li>
                      <Link to="/">Alone Here</Link>
                    </li>
                    <li>
                      <Link to="/">Alone Here</Link>
                    </li>
                    <li>
                      <Link to="/">Alone Here</Link>
                    </li>
                    <li>
                      <Link to="/">Alone Here</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="filter__box">
              <div
                className="filter__title"
                onClick={(event) => {
                  event.target.classList.toggle("open");
                }}
              >
                Bo'limlar boyicha
              </div>
              <div className="filter__body">
                <div className="filter__row">
                  <div className="filter__checkbox">
                    <input type="checkbox" name="ch1" id="ch1" />
                    <label htmlFor="ch1">Action</label>
                  </div>
                  <div className="filter__checkbox">
                    <input type="checkbox" name="ch2" id="ch2" />
                    <label htmlFor="ch2">Action</label>
                  </div>
                  <div className="filter__checkbox">
                    <input type="checkbox" name="ch3" id="ch3" />
                    <label htmlFor="ch3">Action</label>
                  </div>
                  <div className="filter__checkbox">
                    <input type="checkbox" name="ch4" id="ch4" />
                    <label htmlFor="ch4">Action</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter__box">
              <div
                className="filter__title"
                onClick={(event) => {
                  event.target.classList.toggle("open");
                }}
              >
                Narxlar boyicha
              </div>
              <div className="filter__body range">
                <InputRange
                  formatLabel={(value) => `${value}$`}
                  maxValue={1500}
                  minValue={0}
                  value={value}
                  onChange={(value) => setValue(value)}
                />
              </div>
            </div>
            <button className="btn btn__bg btn__full mb-2">Filterlash</button>
            <button className="btn btn__outline btn__full">Tozalash</button>
          </div>
          <div className="col-9">
            <div className="btitle">Books</div>
            <div className="cat__tool">
              <ul className="cat__tool--list">
                <li>
                  <Link className="active" to="/">
                    janr
                  </Link>
                </li>
                <li>
                  <Link to="/">janr</Link>
                </li>
                <li>
                  <Link to="/">janr</Link>
                </li>
              </ul>
              <button
                className={toggleProduct ? "cat__list active" : "cat__list"}
                onClick={() => {
                  setToggleProduct(true);
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 5H21C21.2652 5 21.5196 4.89464 21.7071 4.7071C21.8946 4.51957 22 4.26521 22 4C22 3.73478 21.8946 3.48043 21.7071 3.29289C21.5196 3.10536 21.2652 3 21 3H3C2.73478 3 2.48043 3.10536 2.29289 3.29289C2.10536 3.48043 2 3.73478 2 4C2 4.26521 2.10536 4.51957 2.29289 4.7071C2.48043 4.89464 2.73478 5 3 5Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M3 13.0003H21C21.2652 13.0003 21.5196 12.8949 21.7071 12.7074C21.8946 12.5198 22 12.2655 22 12.0002C22 11.735 21.8946 11.4807 21.7071 11.2931C21.5196 11.1056 21.2652 11.0002 21 11.0002H3C2.73478 11.0002 2.48043 11.1056 2.29289 11.2931C2.10536 11.4807 2 11.735 2 12.0002C2 12.2655 2.10536 12.5198 2.29289 12.7074C2.48043 12.8949 2.73478 13.0003 3 13.0003Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M3 20.9998H21C21.2652 20.9998 21.5196 20.8944 21.7071 20.7069C21.8946 20.5193 22 20.265 22 19.9998C22 19.7345 21.8946 19.4802 21.7071 19.2926C21.5196 19.1051 21.2652 18.9998 21 18.9998H3C2.73478 18.9998 2.48043 19.1051 2.29289 19.2926C2.10536 19.4802 2 19.7345 2 19.9998C2 20.265 2.10536 20.5193 2.29289 20.7069C2.48043 20.8944 2.73478 20.9998 3 20.9998Z"
                    fill="#AAAAAA"
                  />
                </svg>
              </button>
              <button
                className={!toggleProduct ? "cat__grid active" : "cat__grid"}
                onClick={() => {
                  setToggleProduct(false);
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.99994 11.0002H9.99994C10.2652 11.0002 10.5195 10.8949 10.707 10.7074C10.8946 10.5198 10.9999 10.2655 10.9999 10.0002V3.00024C10.9999 2.73503 10.8946 2.48067 10.707 2.29314C10.5195 2.1056 10.2652 2.00024 9.99994 2.00024H2.99994C2.73472 2.00024 2.48037 2.1056 2.29283 2.29314C2.1053 2.48067 1.99994 2.73503 1.99994 3.00024V10.0002C1.99994 10.2655 2.1053 10.5198 2.29283 10.7074C2.48037 10.8949 2.73472 11.0002 2.99994 11.0002ZM3.99994 4.00024H8.99994V9.00024H3.99994V4.00024Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M14.0001 11.0002H21.0001C21.2653 11.0002 21.5197 10.8949 21.7072 10.7074C21.8947 10.5198 22.0001 10.2655 22.0001 10.0002V3.00024C22.0001 2.73503 21.8947 2.48067 21.7072 2.29314C21.5197 2.1056 21.2653 2.00024 21.0001 2.00024H14.0001C13.7349 2.00024 13.4805 2.1056 13.293 2.29314C13.1054 2.48067 13.0001 2.73503 13.0001 3.00024V10.0002C13.0001 10.2655 13.1054 10.5198 13.293 10.7074C13.4805 10.8949 13.7349 11.0002 14.0001 11.0002ZM15.0001 4.00024H20.0001V9.00024H15.0001V4.00024Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M2.99994 21.9998H9.99994C10.2652 21.9998 10.5195 21.8944 10.707 21.7069C10.8946 21.5193 10.9999 21.265 10.9999 20.9998V13.9998C10.9999 13.7345 10.8946 13.4802 10.707 13.2926C10.5195 13.1051 10.2652 12.9998 9.99994 12.9998H2.99994C2.73472 12.9998 2.48037 13.1051 2.29283 13.2926C2.1053 13.4802 1.99994 13.7345 1.99994 13.9998V20.9998C1.99994 21.265 2.1053 21.5193 2.29283 21.7069C2.48037 21.8944 2.73472 21.9998 2.99994 21.9998ZM3.99994 14.9998H8.99994V19.9998H3.99994V14.9998Z"
                    fill="#AAAAAA"
                  />
                  <path
                    d="M14.0001 21.9998H21.0001C21.2653 21.9998 21.5197 21.8944 21.7072 21.7069C21.8947 21.5193 22.0001 21.265 22.0001 20.9998V13.9998C22.0001 13.7345 21.8947 13.4802 21.7072 13.2926C21.5197 13.1051 21.2653 12.9998 21.0001 12.9998H14.0001C13.7349 12.9998 13.4805 13.1051 13.293 13.2926C13.1054 13.4802 13.0001 13.7345 13.0001 13.9998V20.9998C13.0001 21.265 13.1054 21.5193 13.293 21.7069C13.4805 21.8944 13.7349 21.9998 14.0001 21.9998ZM15.0001 14.9998H20.0001V19.9998H15.0001V14.9998Z"
                    fill="#AAAAAA"
                  />
                </svg>
              </button>
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
            <div className="row">{toggleProduct ? <Grid /> : <List />}</div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="res">Showing 12 from 50 data</div>
              <div className="pagination">
                <Link to="/" className="pagination__prev">
                  Previos
                </Link>
                <ul className="pagination__list">
                  <li>
                    <Link to="/" className="active">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="/">2</Link>
                  </li>
                  <li>
                    <Link to="/">3</Link>
                  </li>
                </ul>
                <Link to="/" className="pagination__next">
                  Next
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sale />
      <div className="container">
        <Advan />
      </div>
      <Sub />
    </div>
  );
};

export default Category;
