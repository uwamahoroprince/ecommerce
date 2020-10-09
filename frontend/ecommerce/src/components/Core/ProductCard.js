import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import DisplayImage from "./DisplayImage";
import moment from "moment";
import { addItem, updateItem, removeItem } from "./CartOperations";

const ProductCard = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = (f) => f,
  run = undefined,
  // changeCartSize
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  // const showViewButton = (showViewProductButton) => {
  //   return (
  //     showViewProductButton && (
  //       <Link to={`/product/${product._id}`} className="mr-2">
  //         <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">
  //           View Product
  //         </button>
  //       </Link>
  //     )
  //   );
  // };
  const addToCart = () => {
    // console.log('added');
    addItem(product);
    setRedirect(true);
  };

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/productCart" />;
    }
  };

  const showAddToCartBtn = (showAddToCartButton) => {
    return (
      showAddToCartButton && (
        <button
          onClick={addToCart}
          className="btn btn-warning mt-2 mb-2 card-btn-1 text-white  "
        >
          Add to cart
        </button>
      )
    );
  };

  const showStock = (quantity) => {
    return quantity > 0 ? (
      <span className="badge badge-primary badge-pill">In Stock </span>
    ) : (
      <span className="badge badge-primary badge-pill">Out of Stock </span>
    );
  };

  const handleChange = (productId) => (event) => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = (cartUpdate) => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input
              type="number"
              className="form-control"
              value={count}
              onChange={handleChange(product._id)}
            />
          </div>
        </div>
      )
    );
  };
  const showRemoveButton = (showRemoveProductButton) => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove Product
        </button>
      )
    );
  };
  return (
    <React.Fragment>
      <Link
        to={`/product/${product._id}`}
        className="mr-2"
        style={{ textDecoration: "none" }}
      >
        <div className="card shadow" style={{ height: "21rem" }}>
          <div className="inner">
            <DisplayImage item={product} url="product" />
          </div>

          <div className="card-body text-center">
            {shouldRedirect(redirect)}

            <p className="" style={{ color: "#000000" }}>
              {product.price} Rwf {product.name}
            </p>
            {showStock(product.quantity)}
            <br />

            {showAddToCartBtn(showAddToCartButton)}

            {showRemoveButton(showRemoveProductButton)}

            {showCartUpdateOptions(cartUpdate)}
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default ProductCard;
