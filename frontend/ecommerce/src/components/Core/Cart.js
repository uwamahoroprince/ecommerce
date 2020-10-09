import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Layout from './Layout';
import { getCart } from "./CartOperations";
import ViewCart from "./ViewCart";
import Checkout from "./Checkout";
import Footer from "./footer";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);

  useEffect(() => {
    setItems(getCart());
  }, [run]);

  const showItems = (items) => {
    return (
      <div>
        <h6
          className="alert alert-success text-center mt-2  text-dark"
          style={{
            width: "300px",
            marginLeft: "2rem",
          }}
        >
          Your cart has {`${items.length}`} items
        </h6>
        <hr />
        {items.map((product, i) => (
          <ViewCart
            key={i}
            product={product}
            showAddToCartButton={false}
            cartUpdate={true}
            showRemoveProductButton={true}
            setRun={setRun}
            run={run}
          />
        ))}
      </div>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br /> <Link to="/Shopping">Continue shopping</Link>
    </h2>
  );

  return (
    <React.Fragment>
      <div
        className="row"
        style={{
          justifyContent: "center",
        }}
      >
        <div className="col-lg-10 col-md-10 col-sm-12">
          {items.length > 0 ? showItems(items) : noItemsMessage()}
        </div>
      </div>

      <div
        className="row"
        style={{
          justifyContent: "center",
        }}
      >
        <div
          className="col-lg-10 col-md-10 col-sm-12"
          style={{
            justifyContent: "center",
            marginLeft: "0.5rem",
          }}
        >
          <table class="table table-bordered table-dark">
            <thead>
              <tr>
                {" "}
                <th scope="col">
                  {<Checkout products={items} setRun={setRun} run={run} />}
                </th>
              </tr>
            </thead>
          </table>
        </div>

        <div className="row">
          <div className="col-md-8 mb-4 col-lg-12 ">
            <div className="card">
              <form className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <div className="md-form ">
                      <input
                        type="text"
                        id="firstName"
                        className="form-control"
                      />
                      <label for="firstName" className="">
                        First name
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6 mb-2">
                    <div className="md-form">
                      <input
                        type="text"
                        id="lastName"
                        className="form-control"
                      />
                      <label for="lastName" className="">
                        Last name
                      </label>
                    </div>
                  </div>
                </div>

                <div className="md-form input-group pl-0 mb-5">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      @
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control py-0"
                    placeholder="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="md-form mb-5">
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="youremail@example.com"
                  />
                  <label for="email" className="">
                    Email (optional)
                  </label>
                </div>

                <div className="md-form mb-5">
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    placeholder="1234 Main St"
                  />
                  <label for="address" className="">
                    Address
                  </label>
                </div>

                <div className="md-form mb-5">
                  <input
                    type="text"
                    id="address-2"
                    className="form-control"
                    placeholder="Apartment or suite"
                  />
                  <label for="address-2" className="">
                    Address 2 (optional)
                  </label>
                </div>

                <div className="row">
                  <div className="col-lg-4 col-md-6 mb-4">
                    <label for="zip">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>

                <hr />

                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="same-address"
                  />
                  <label className="custom-control-label" for="same-address">
                    Shipping address is the same as my billing address
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="save-info"
                  />
                  <label className="custom-control-label" for="save-info">
                    Save this information for next time
                  </label>
                </div>

                <hr />

                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      checked
                      required
                    />
                    <label className="custom-control-label" for="credit">
                      Credit card
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required
                    />
                    <label className="custom-control-label" for="debit">
                      Debit card
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required
                    />
                    <label className="custom-control-label" for="paypal">
                      Paypal
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="cc-name">Name on card</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder=""
                      required
                    />
                    <small className="text-muted">
                      Full name as displayed on card
                    </small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="cc-number">Credit card number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <label for="cc-expiration">Expiration</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="cc-expiration">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Continue to checkout
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Cart;
