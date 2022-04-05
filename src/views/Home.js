import React from "react";
import Advan from "../components/advan";
import Lslider from "../components/home/lslider";
import Promo from "../components/home/promo";
import Plslider from "../components/home/plslider";
import Prslider from "../components/home/prslider";
import Rslider from "../components/home/rslider";
import Fast from "../components/home/fast";
import Sale from "../components/sale";
import Soon from "../components/home/soon";
import Review from "../components/home/review";
import News from "../components/home/news";
import Stat from "../components/home/stat";
import Sub from "../components/sub";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-9 col-sm-12">
            <Lslider />
          </div>
          <div className="col-3 col-sm-12">
            <Rslider />
          </div>
        </div>
        <Advan />
        <div className="row">
          <div className="col-6 col-md12">
            <Plslider />
          </div>
          <div className="col-6 col-md12">
            <Prslider />
          </div>
        </div>
        <Promo />
        <Fast />
        <Sale />
      </div>
      <Soon />
      <Review/>
      <News/>
      <Stat/>
      <Sub/>
    </div>
  );
};

export default Home;
