import React, { useState } from "react";
import "./signup.css";

import { Link } from "react-router-dom";

const Signup = () => {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
    retypePassword: "",
    error: "",
    success: false,
  });

  const handleChange = (name) => (event) => {
    setvalues({ ...values, error: false, [name]: event.target.value });
  };

  const { name, email, password, retypePassword, error, success } = values;

  const signup = (user) => {
    if (user.password === retypePassword) {
      return fetch(`${process.env.REACT_APP_URL}/signup`, {
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
    } else {
      return console.log("passwords dosent match");
    }
  };

  const handleInsert = (event) => {
    event.preventDefault();
    signup({ email, name, password }).then((data) => {
      if (data.error) {
        setvalues({ ...values, error: data.error, success: false });
      } else {
        setvalues({
          name: "",
          email: "",
          password: "",
          retypePassword: "",
          error: "",
          success: true,
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
  const displaySeccess = () => {
    return (
      <div
        className="alert alert-info"
        style={{ display: success ? "" : "none" }}
      >
        Account Created Successfuly please <Link to="/signin">Login</Link>
      </div>
    );
  };
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="d-flex justify-content-center h-100">
          <div
            className="card"
            style={{
              height: "520px",
              marginTop: "3rem",
              marginBottom: "auto",
              width: "400px",
              backgroundColor: "rgba(129, 158, 180, 0.925)",
            }}
          >
            <div className="card-header">
              {displayError()}
              {displaySeccess()}
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
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    onChange={handleChange("name")}
                    value={name}
                    className="form-control"
                    type="email"
                    placeholder="Enter Full Name"
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
                    value={password}
                    type="password"
                    placeholder="Password"
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
                    onChange={handleChange("retypePassword")}
                    value={retypePassword}
                    type="password"
                    placeholder="Re-Type Password"
                  />
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox" />
                  Remember Me
                </div>
                <div className="form-group">
                  <input
                    onClick={handleInsert}
                    type="submit"
                    className="btn float-right login_btn"
                    style={{ backgroundColor: "#ffc312" }}
                  />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                I Alredy Have An Account!<Link to="/signin">LogIn</Link>
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

export default Signup;
