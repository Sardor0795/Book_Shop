import React from "react";

import "./sub.scss";

const Sub = () => {
  return (
    <div className="container">
      <div className="sub">
        <div className="sub__title">
          Bizning yangililarimizga obuna bo’ling va ko’plab akiyalarimizdan
          xabardor bo’ling
        </div>
        <form className="sub__form">
          <input type="text" placeholder="Email manzilingiz" />
          <button>Obuna bo’lish</button>
        </form>
      </div>
    </div>
  );
};

export default Sub;
