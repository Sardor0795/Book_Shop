import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./home.scss";
import { Link } from "react-router-dom";

import book from "../../assets/img/book_den.jpg";
import bg from "../../assets/img/taklifbg.jpg";

const Prslider = () => {
  return (
    <div className="pslider__box" style={{ backgroundImage: `url(${bg})` }}>
      <div className="pslider__title">Sizga taklif etamiz</div>
      <div className="pslider__stitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <Splide
        className="pslider"
        options={{
          type: "loop",
          perPage: 4,
          gap: 30,
          autoplay: true,
          rewind: true,
          interval: 4000,
          arrows: true,
          pagination: false,
        }}
      >
        <SplideSlide>
          <Link
            to="/"
            className="pslider__img"
            style={{ backgroundImage: `url${book}` }}
          >
            <div
              className="pslider__img"
              style={{ backgroundImage: `url(${book})` }}
            ></div>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link
            to="/"
            className="pslider__img"
            style={{ backgroundImage: `url${book}` }}
          >
            <div
              className="pslider__img"
              style={{ backgroundImage: `url(${book})` }}
            ></div>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link
            to="/"
            className="pslider__img"
            style={{ backgroundImage: `url${book}` }}
          >
            <div
              className="pslider__img"
              style={{ backgroundImage: `url(${book})` }}
            ></div>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link
            to="/"
            className="pslider__img"
            style={{ backgroundImage: `url${book}` }}
          >
            <div
              className="pslider__img"
              style={{ backgroundImage: `url(${book})` }}
            ></div>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link
            to="/"
            className="pslider__img"
            style={{ backgroundImage: `url${book}` }}
          >
            <div
              className="pslider__img"
              style={{ backgroundImage: `url(${book})` }}
            ></div>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link
            to="/"
            className="pslider__img"
            style={{ backgroundImage: `url${book}` }}
          >
            <div
              className="pslider__img"
              style={{ backgroundImage: `url(${book})` }}
            ></div>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link
            to="/"
            className="pslider__img"
            style={{ backgroundImage: `url${book}` }}
          >
            <div
              className="pslider__img"
              style={{ backgroundImage: `url(${book})` }}
            ></div>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link
            to="/"
            className="pslider__img"
            style={{ backgroundImage: `url${book}` }}
          >
            <div
              className="pslider__img"
              style={{ backgroundImage: `url(${book})` }}
            ></div>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link
            to="/"
            className="pslider__img"
            style={{ backgroundImage: `url${book}` }}
          >
            <div
              className="pslider__img"
              style={{ backgroundImage: `url(${book})` }}
            ></div>
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Link
            to="/"
            className="pslider__img"
            style={{ backgroundImage: `url${book}` }}
          >
            <div
              className="pslider__img"
              style={{ backgroundImage: `url(${book})` }}
            ></div>
          </Link>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Prslider;
