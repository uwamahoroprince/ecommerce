import React, { useState } from "react";
// import moment from "moment";
import { Redirect } from "react-router-dom";
import DisplayImage from "../Core/DisplayImage";
// import { display } from "./ApiRequest";
import { addItem, updateItem, removeItem } from "./CartOperations";

//IMPORTING CSS MODULE
import "./ViewProduct.css";

const ViewProducts = ({
  product,
  viewButton = false,
  cartUpdate = false,
  displayRemoveButton = false,
}) => {
  const [redirected, setRedirected] = useState(false);
  const [count, setCount] = useState(product.count);
  // const displayviewButton = (viewButton) => {
  //   return (
  //     viewButton && (
  //       <button className="btn btn-outline-primary mt-2 mb-2 mr-2">View</button>
  //     )
  //   );
  // };
  const addToCart = () => {
    // console.log('added');
    addItem(product);
    setRedirected(true);
  };

  const isRedirect = (redirected) => {
    if (redirected) {
      return <Redirect to="/Productcart" />;
    }
  };
  const addToCartBtn = () => {
    return (
      <button
        onClick={addToCart}
        type="button"
        className="btn btn-green shadow"
      >
        <i className="fas fa-shopping-basket"></i>Add To Cart
      </button>
    );
  };

  const removeFromCartBtn = (displayRemoveButton) => {
    return (
      displayRemoveButton && (
        <button
          onClick={() => removeItem(product._id)}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove This Item
        </button>
      )
    );
  };

  // const displayStock = (quantity) => {
  //   return quantity > 0 ? (
  //     <span className="badge badge-success badge-pill">In Stock</span>
  //   ) : (
  //     <span className="badge badge-danger badge-pill">Out Of Stock</span>
  //   );
  // };
  const handleChange = (productId) => (event) => {
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };
  const displayCartUpdate = () => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text text-info">Adjust</span>
              <input
                type="number"
                className="form-input"
                value={count}
                onChange={handleChange(product._id)}
              />
            </div>
          </div>
        </div>
      )
    );
  };
  return (
    <React.Fragment>
      {isRedirect(redirected)}

      <div className="row my-0 shadow ">
        <div className="col-lg-6 col-md-6 p-0 py-md-5 my-xs-0 my-lg-4 my-md-5">
          <div className="image py-2 my-lg-0 my-md-5">
            <DisplayImage item={product} url="product" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 shadow content p-5">
          <div className="row my-3">
            <div className="d-flex justfy-content-between">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="price">
                <span>{product.price}</span>&nbsp;Rwf
              </div>
            </div>
          </div>
          <div className="row my-lg-5 my-md-4">
            <h3 className="text-info">{product.name}</h3>
          </div>
          <div className="row col-lg-5 col-md-4">
            {" "}
            <p>{product.description}</p>
          </div>

          <div className="row col-5">
            <p className="text-info">Quantity</p>

            <div className="d-flex">{displayCartUpdate(cartUpdate)}</div>
          </div>
          <div className="row my-3">
            <ul style={{ listStyle: "none" }}>
              <li>
                <i className="fas fa-long-arrow-alt-right"></i>&nbsp; In Good
                Conditions
              </li>
              <li>
                <i className="fas fa-long-arrow-alt-right"></i>&nbsp; In Good
                Conditions
              </li>
              <li>
                <i className="fas fa-long-arrow-alt-right"></i>&nbsp; In Good
                Conditions
              </li>
            </ul>
          </div>
          <div className="row my-4">
            <div className="cart-btn d-flex justfy-content-center">
              {addToCartBtn()}
            </div>
          </div>
        </div>
      </div>
      {removeFromCartBtn(displayRemoveButton)}
    </React.Fragment>
  );
};
export default ViewProducts;
