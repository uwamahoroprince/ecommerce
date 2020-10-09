import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import DisplayImage from "./DisplayImage";
import moment from "moment";
import { addItem, updateItem, removeItem } from "./CartOperations";

const ViewCart = ({
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
          className="btn btn-success mt-2 mb-2 card-btn-1  "
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
          <div className="input-group ">
            <input
              style={{ maxWidth: "100px" }}
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
          className="btn btn-danger"
        >
          Remove
        </button>
      )
    );
  };
  return (
    <React.Fragment>
      <table
        class="table table-borderless table-dark"
        style={{ justifyContent: "center", marginLeft: "0.5rem" }}
      >
        <tbody>
          <tr>
            <th scope="row">{product.name}</th>
            <td style={{ width: "100px", height: "80px" }}>
              <DisplayImage item={product} url="product" />
            </td>
            <td> {product.price} Rwf</td>
            {/* <td> {product.description} Rwf</td> */}

            <td>{showRemoveButton(showRemoveProductButton)}</td>
            <td> {showCartUpdateOptions(cartUpdate)}</td>
          </tr>

          {showAddToCartBtn(showAddToCartButton)}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ViewCart;
