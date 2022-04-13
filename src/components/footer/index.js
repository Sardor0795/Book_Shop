import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.svg";
import "./footer.scss";

import fb from "../../assets/img/facebook.svg";
import yt from "../../assets/img/youtube.svg";
import tw from "../../assets/img/twitter.svg";
import lin from "../../assets/img/linkedin.svg";
import ins from "../../assets/img/instagram.svg";

import loc from "../../assets/img/lokatsya.svg";
import mail from "../../assets/img/letter.svg";
import phone from "../../assets/img/tel.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container d-flex justify-content-between">
        <div className="footer__item">
          <Link to="/" href="http" className="header__logo">
            <img src={logo} alt="" />
            <span className="header__logo--right">
              <span className="header__logo--name">Pir.uz</span>
              <div className="header__logo--slogan">
                Kitoblar Onlayn do’koni
              </div>
            </span>
          </Link>
          <div className="footer__text">
            Bookoe is a Book Store Website lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </div>
          <div className="footer__title">Bizni kuzating</div>
          <ul className="footer__social">
            <li>
              <a href="http" className="fb">
                <img src={fb} alt="" />
              </a>
            </li>
            <li>
              <a href="http" className="yt">
                <img src={yt} alt="" />
              </a>
            </li>
            <li>
              <a href="http" className="tw">
                <img src={tw} alt="" />
              </a>
            </li>
            <li>
              <a href="http" className="lin">
                <img src={lin} alt="" />
              </a>
            </li>
            <li>
              <a href="http" className="ins">
                <img src={ins} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__item">
          <div className="footer__title">Kitoblar janrlari</div>
          <ul className="footer__menu half">
            <li>
              <a href="http">Roman</a>
            </li>
            <li>
              <a href="http">Roman</a>
            </li>
            <li>
              <a href="http">Roman</a>
            </li>
            <li>
              <a href="http">Roman</a>
            </li>
            <li>
              <a href="http">Roman</a>
            </li>
            <li>
              <a href="http">Roman</a>
            </li>
            <li>
              <a href="http">Roman</a>
            </li>
            <li>
              <a href="http">Roman</a>
            </li>
            <li>
              <a href="http">Roman</a>
            </li>
            <li>
              <a href="http">Roman</a>
            </li>
            <li>
              <a href="http">Roman</a>
            </li>
          </ul>
        </div>
        <div className="footer__item">
          <div className="footer__title">Tezkor havolalar</div>
          <ul className="footer__menu">
            <li>
              <a href="http">Roman</a>
            </li>
            <li>
              <a href="http">Roman</a>
            </li>
            <li>
              <a href="http">Roman</a>
            </li>
            <li>
              <a href="http">Roman</a>
            </li>
            <li>
              <a href="http">Roman</a>
            </li>
          </ul>
        </div>
        <div className="footer__item">
          <div className="footer__title">Bizning do’kon</div>
          <div className="footer_map"></div>
          <div className="footer__contact">
            <img src={loc} alt="" />
            <div className="footer__val">
              27 Chashtepa ko'chasi, <br />
              Toshkent, O`zbekiston
            </div>
          </div>
          <div className="footer__contact">
            <img src={phone} alt="" />
            <div className="footer__val">+998555004466</div>
          </div>
          <div className="footer__contact">
            <img src={mail} alt="" />
            <div className="footer__val">piruzofficial@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__copy">
            Pir.uz - © 2022 All Rights Reserved
          </div>
          <a href="http" className="footer__author">
            Made with ♥ by Doin.uz
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
