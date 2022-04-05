import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./home.scss";
import { Link } from "react-router-dom";

import rightarrow from "../../assets/img/right_arrow.svg";
import girl from "../../assets/img/book_girl.jpg";
import boy from "../../assets/img/boy_book.jpg";

const Lslider = () => {
  return (
    <div>
      <Splide
        className="mslider"
        options={{
          type: "fade",
          autoplay: true,
          interval: 4000,
          arrows: false,
          rewind: true,
        }}
      >
        <SplideSlide>
          <div className="mslider__row">
            <div className="mslider__info">
              <div className="mslider__slogan">Maktabga muhim</div>
              <div className="mslider__title">50% aksiya</div>
              <div className="mslider_stitle">maktab kitoblari</div>
              <div className="mslider__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </div>
              <div className="d-flex">
                <Link to="/" className="btn btn__bg">
                  Sotib olish
                  <img src={rightarrow} alt="" />
                </Link>
                <Link to="/" className="btn btn__outline">
                  Boshqa aksiyalar
                </Link>
              </div>
            </div>
            <div
              className="mslider__img"
              style={{ backgroundImage: `url(${girl})` }}
            ></div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="mslider__row">
            <div className="mslider__info">
              <div className="mslider__slogan">Univerga muhim</div>
              <div className="mslider__title">100% aksiya</div>
              <div className="mslider_stitle">maktab kitoblari</div>
              <div className="mslider__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </div>
              <div className="d-flex">
                <Link to="/" className="btn btn__bg">
                  Sotib olish
                  <img src={rightarrow} alt="" />
                </Link>
                <Link to="/" className="btn btn__outline">
                  Boshqa aksiyalar
                </Link>
              </div>
            </div>
            <div
              className="mslider__img"
              style={{ backgroundImage: `url(${boy})` }}
            ></div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Lslider;
