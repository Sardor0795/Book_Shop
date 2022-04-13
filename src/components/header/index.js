import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

//imgs
import logo from "../../assets/img/logo.svg";
import menu from "../../assets/img/menu.svg";
import search from "../../assets/img/search.svg";
import fav from "../../assets/img/fav.svg";
import cart from "../../assets/img/cart.svg";
import user from "../../assets/img/user.svg";
import down from "../../assets/img/down.svg";

const Header = () => {
  const [catBtn, setCatbtn] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" href="#" className="header__logo">
          <img src={logo} alt="" />
          <span className="header__logo--right">
            <span className="header__logo--name">Pir.uz</span>
            <div className="header__logo--slogan">Kitoblar Onlayn do’koni</div>
          </span>
        </Link>
        <div className="header__search">
          <button
            className={catBtn ? "header__menu btn show" : "header__menu btn"}
            onClick={() => {
              setCatbtn(!catBtn);
            }}
          >
            <img src={menu} alt="" />
            <span>Category</span>
            <img src={down} alt="" />
            <ul className="cats">
              <li>
                <Link to="/">Roman</Link>
              </li>
              <li>
                <Link to="/">Roman</Link>
              </li>
              <li>
                <Link to="/">Roman</Link>
              </li>
              <li>
                <Link to="/">Roman</Link>
              </li>
              <li>
                <Link to="/">Roman</Link>
              </li>
              <li>
                <Link to="/">Roman</Link>
              </li>
            </ul>
          </button>
          <input type="text" placeholder="Search" className="header__input" />
          <button className="header__find btn">
            <img src={search} alt="" />
          </button>
        </div>
        <Link to="/" className="header__btn btn btn__outline">
          <span className="header__btn--count">35</span>
          <img src={fav} alt="" />
        </Link>
        <Link to="/" className="header__btn btn btn__outline">
          <span className="header__btn--count">35</span>
          <img src={cart} alt="" />
        </Link>
        <button className="header__user btn btn__bg btn__shadow">
          <img src={user} alt="" />
          Sign in
        </button>
      </div>
    </header>
  );
};

export default Header;
