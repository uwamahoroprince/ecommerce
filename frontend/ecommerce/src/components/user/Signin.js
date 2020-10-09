import React, { useState } from "react";
import "./signin.css";

import { Link, Redirect } from "react-router-dom";

//IMPORTING components
import { authenticate } from "../../../src/authenticate/index";
import { isAuth } from "../../../src/authenticate/index";

const Signin = () => {
  const [values, setvalues] = useState({
    email: "",
    password: "",
    retypePassword: "",
    error: "",
    loading: false,
    redirect: false,
  });

  const handleChange = (name) => (event) => {
    setvalues({ ...values, error: false, [name]: event.target.value });
  };

  const { email, password, error, loading, redirect } = values;
  const { user } = isAuth();

  const signin = (user) => {
    return fetch(`${process.env.REACT_APP_URL}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignin = (event) => {
    event.preventDefault();
    signin({ email, password }).then((data) => {
      if (data.error) {
        setvalues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setvalues({
            ...values,
            redirect: true,
          });
        });
      }
    });
  };
  const displayError = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };
  const displayLoading = () => {
    if (loading) {
      return (
        <div className="alert alert-info">
          <h2>loading...</h2>
        </div>
      );
    }
  };
  const redirectUser = () => {
    if (redirect) {
      if (user.role === "1") {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/" />;
      }
    }
  };
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="d-flex justify-content-center h-100">
          <div
            className="card"
            style={{
              height: "430px",
              marginTop: "5rem",
              marginBottom: "auto",
              width: "400px",
              backgroundColor: "rgba(129, 158, 180, 0.925)",
            }}
          >
            <div className="card-header">
              {displayError()}
              {displayLoading()}
              {redirectUser()}
              <h3>IwacuMarket</h3>
              <div className="d-flex justify-content-end social_icon">
                <span>
                  <i className="fab fa-facebook-square"></i>
                </span>
                <span>
                  <i className="fab fa-google-plus-square"></i>
                </span>
                <span>
                  <i className="fab fa-twitter-square"></i>
                </span>
              </div>
            </div>
            <div className="card-body">
              <form>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    onChange={handleChange("email")}
                    className="form-control"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    className="form-control"
                    onChange={handleChange("password")}
                    type="password"
                    placeholder="Password"
                    value={password}
                  />
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox" />
                  Remember Me
                </div>
                <div className="form-group">
                  <input
                    onClick={handleSignin}
                    type="submit"
                    className="btn float-right login_btn"
                    style={{ backgroundColor: "#ffc312" }}
                  />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?<Link to="/signup">Sign Up</Link>
              </div>
              <div className="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Signin;
