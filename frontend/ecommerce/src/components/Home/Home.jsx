import React, { useState, useEffect } from "react";
import { fetchProduct } from "../Core/ApiRequest";
import Footer from "../Core/footer";

//importing mudules

import ProductCard from "../Core/ProductCard";

const Home = () => {
  const [productBySell, setProductBySell] = useState([]);
  const [productByArrival, setProductByArrival] = useState([]);
  const [error, setError] = useState([]);

  const displayproducBySell = () => {
    fetchProduct("sold").then((data) => {
      if (data.error) {
        setError(data.error);
        console.log(error);
      } else {
        setProductBySell(data);
      }
    });
  };

  const displayproductByArrival = () => {
    fetchProduct("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductByArrival(data);
      }
    });
  };

  useEffect(() => {
    displayproductByArrival();
    displayproducBySell();
  }, []);
  return (
    <React.Fragment>
      {/* rendering best sells */}
      <h6 className="mb-4 text-center">Best Sells</h6>
      <div
        className="row justify-content-center"
        style={{ margin: "4rem 1rem" }}
      >
        {productBySell.map((p, i) => (
          <div key={i} className="col-md-3 col-sm-3 col-6 col-lg-2">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
      <Footer />
      {/* rendering new arrivals */}

      {/* <h6 className="mb-4">New Arrival</h6>
      <div className="row justify-content-center">
        {productByArrival.map((p, i) => (
          <div key={i} className="col-md-3 col-sm-3 col-6 col-lg-2">
            <ProductCard product={p} />
          </div>
        ))}
      </div> */}
    </React.Fragment>
  );
};
export default Home;
