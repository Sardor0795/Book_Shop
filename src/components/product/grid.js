import React from "react";
import { Link } from "react-router-dom";

import "./grid.scss";
import book from "../../assets/img/book_den.jpg";
import star from "../../assets/img/star.svg";
import cart from "../../assets/img/cart.svg";

const Grid = () => {
  return (
    <div className="col-3 col-md-4 col-sm-6">
      <div className="gpro__box">
        <div className="gpro__img" style={{ backgroundImage: `url(${book})` }}>
          <button className="gpro__fav">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5204 2.27344C18.9935 1.74649 18.368 1.32849 17.6796 1.0433C16.9912 0.758113 16.2533 0.611328 15.5082 0.611328C14.763 0.611328 14.0252 0.758113 13.3368 1.0433C12.6483 1.32849 12.0228 1.74649 11.496 2.27344L10.9999 2.76953L10.5038 2.27344C9.97694 1.74649 9.35145 1.32849 8.66302 1.0433C7.9746 0.758113 7.23675 0.611328 6.49159 0.611328C5.74644 0.611328 5.00858 0.758113 4.32016 1.0433C3.63174 1.32849 3.00624 1.74649 2.47938 2.27344C0.778213 3.97412 0.481383 6.59424 1.68638 9.28271C3.15513 12.561 10.034 18.8608 10.326 19.1274C10.5102 19.2955 10.7505 19.3886 10.9999 19.3886C11.2492 19.3886 11.4895 19.2955 11.6737 19.1274C11.9657 18.8608 18.8446 12.561 20.3133 9.28223C21.5184 6.59424 21.2216 3.97412 19.5204 2.27344ZM18.4892 8.46436C17.5194 10.6274 13.2401 14.915 10.9999 17.0244C8.75966 14.915 4.48134 10.6289 3.51063 8.46484C3.10243 7.55225 2.32118 5.25977 3.89344 3.6875C4.58252 2.99844 5.5171 2.61133 6.49159 2.61133C7.46608 2.61133 8.40066 2.99844 9.08973 3.6875L10.2929 4.89063C10.3857 4.98351 10.4959 5.05719 10.6173 5.10745C10.7386 5.15772 10.8686 5.1836 10.9999 5.1836C11.1312 5.1836 11.2613 5.15772 11.3826 5.10745C11.5039 5.05719 11.6141 4.98351 11.707 4.89063L12.9101 3.6875C13.6102 3.01967 14.5406 2.64709 15.5082 2.64709C16.4758 2.64709 17.4062 3.01967 18.1063 3.6875C19.6786 5.25977 18.8974 7.55225 18.4892 8.46436Z"
                fill="#6C5DD3"
              />
            </svg>
          </button>
        </div>
        <Link to="/" className="gpro__title">
          Thunder Stunt
        </Link>
        <div className="gpro__bottom">
            <div className="gpro__show">
              <div className="gpro__genre">ADVANTURE, SCIENCE, COMEDY</div>
              <div className="gpro__review">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
            <div className="gpro__hide">
              <div className="gpro__old">$70.00</div>
              <div className="gpro__new">$70.00</div>
              <div className="gpro__cart btn btn__bg">
                <img src={cart} alt="" />
                Add to cart
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
