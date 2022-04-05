import React from "react";
import Advan from "../components/advan";
import Breadcrumbs from "../components/breadcrumbs";
import Sale from "../components/sale";
import Sub from "../components/sub";

const Category = () => {
  return (
    <div>
      <Breadcrumbs />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="btitle">Filter</div>
          </div>
          <div className="col-9">
            <div className="btitle">Books</div>
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
