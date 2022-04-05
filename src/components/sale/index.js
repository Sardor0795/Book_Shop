import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./sale.scss";
import { Link } from "react-router-dom";
import book from "../../assets/img/book.jpg";
import star from '../../assets/img/star.svg';

const Sale = () => {
  return (
    <div className="sale">
      <div className="container">
        <div className="btitle mb-4">Qiziqarli taklif</div>
        <Splide
          className="sale__slider"
          options={{
            perPage: 6,
            type: "loop",
            autoplay: true,
            interval: 4000,
            gap: 38,
          }}
        >
          <SplideSlide>
            <Link to='/' className="sale__box">
              <div
                className="sale__img"
                style={{
                  backgroundImage: `url(${book})`,
                }}
              >
                <div className="sale__count">50%</div>
                <div className="sale__review">
                    <img src={star} alt="" />
                    4.7
                </div>
              </div>
              <div className="sale__title">Qo’rqma</div>
              <div className="sale__genre">Roman, Sarguzash</div>
              <div className="sale__price">
                  <div className="sale__old">60 000 so’m</div>
                  <div className="sale__new">35 000 so’m</div>
              </div>
            </Link>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Sale;
