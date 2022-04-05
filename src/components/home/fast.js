import React from "react";
import { Link } from "react-router-dom";
import book from "../../assets/img/book_den.jpg";
import "./home.scss";

const Fast = () => {
  return (
    <div className="fast">
      <div className="container">
        <div className="btitle mb-1 text-center">Tezkor aksiya</div>
        <div className="fast__stitle text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="fast__timer">
          <div className="fast__items">
            <div className="fast__val">02</div>
            <div className="fast__name">Kun</div>
          </div>
          <div className="fast__items">
            <div className="fast__val">02</div>
            <div className="fast__name">Kun</div>
          </div>
          <div className="fast__items">
            <div className="fast__val">02</div>
            <div className="fast__name">Kun</div>
          </div>
          <div className="fast__items">
            <div className="fast__val">02</div>
            <div className="fast__name">Kun</div>
          </div>
          <div className="fast__items">
            <div className="fast__val">02</div>
            <div className="fast__name">Kun</div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <Link to="/" className="fast__box">
            <div
              className="fast__img"
              style={{
                backgroundImage: `url(${book})`,
              }}
            ></div>
            <div className="fast__title">Ibtido</div>
            <div className="fast__genre">Detektiv</div>
            <div className="fast__old">120 000 so’m</div>
            <div className="fast__new">80 000 so’m</div>
          </Link>
          <Link to="/" className="fast__box">
            <div
              className="fast__img"
              style={{
                backgroundImage: `url(${book})`,
              }}
            ></div>
            <div className="fast__title">Ibtido</div>
            <div className="fast__genre">Detektiv</div>
            <div className="fast__old">120 000 so’m</div>
            <div className="fast__new">80 000 so’m</div>
          </Link>
          <Link to="/" className="fast__box">
            <div
              className="fast__img"
              style={{
                backgroundImage: `url(${book})`,
              }}
            ></div>
            <div className="fast__title">Ibtido</div>
            <div className="fast__genre">Detektiv</div>
            <div className="fast__old">120 000 so’m</div>
            <div className="fast__new">80 000 so’m</div>
          </Link>
          <Link to="/" className="fast__box">
            <div
              className="fast__img"
              style={{
                backgroundImage: `url(${book})`,
              }}
            ></div>
            <div className="fast__title">Ibtido</div>
            <div className="fast__genre">Detektiv</div>
            <div className="fast__old">120 000 so’m</div>
            <div className="fast__new">80 000 so’m</div>
          </Link>
          <Link to="/" className="fast__box">
            <div
              className="fast__img"
              style={{
                backgroundImage: `url(${book})`,
              }}
            ></div>
            <div className="fast__title">Ibtido</div>
            <div className="fast__genre">Detektiv</div>
            <div className="fast__old">120 000 so’m</div>
            <div className="fast__new">80 000 so’m</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Fast;
