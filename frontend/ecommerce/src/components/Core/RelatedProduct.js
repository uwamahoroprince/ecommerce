import React, { useState } from "react";
import moment from "moment";
import { Link, Redirect } from "react-router-dom";
import DisplayImage from "../Core/DisplayImage";
import { display } from "./ApiRequest";
import { addItem, updateItem, removeItem } from "./CartOperations";

const RelatedProduct = ({
  product,
  viewButton = false,
  cartUpdate = false,
  displayRemoveButton = false,
}) => {
  const [redirected, setRedirected] = useState(false);
  const [count, setCount] = useState(product.count);
  const displayviewButton = (viewButton) => {
    return (
      viewButton && (
        <button className="btn btn-outline-primary mt-2 mb-2 mr-2">View</button>
      )
    );
  };
  const addCart = () => {
    addItem(product, () => {
      setRedirected(true);
    });
  };
  const isRedirect = (redirected) => {
    if (redirected) {
      return <Redirect to="/Productcart" />;
    }
  };
  const addToCartBtn = () => {
    return (
      <button onClick={addCart} className="btn btn-outline-success mt-2 mb-2">
        Add to Card
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

  const displayStock = (quantity) => {
    return quantity > 0 ? (
      <span className="badge badge-success badge-pill">In Stock</span>
    ) : (
      <span className="badge badge-danger badge-pill">Out Of Stock</span>
    );
  };
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
              <span className="input-group-text">Adjust Quantity</span>
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
      <Link
        to={`/product/${product._id}`}
        className="mr-2"
        style={{ textDecoration: "none", listStyle: "none" }}
      >
        <div className="card">
          <div className="card-body">
            <DisplayImage item={product} url="product" />

            <p>
              ${product.price} {displayStock(product.quantity)}
            </p>
            <p style={{ color: "#141616" }}>{product.name}</p>

            {displayviewButton(viewButton)}
            <Link to="/"> {addToCartBtn()}</Link>
          </div>
        </div>
      </Link>
      {displayCartUpdate(cartUpdate)}
      {removeFromCartBtn(displayRemoveButton)}
    </React.Fragment>
  );
};
export default RelatedProduct;
