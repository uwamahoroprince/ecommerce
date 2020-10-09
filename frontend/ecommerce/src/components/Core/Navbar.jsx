import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
//IMPORTING MUDELS
import DrawerToggleBotton from "../../components/Core/DrawerToogleButton";
import Search from "./MainSearch";

import { MenuItems } from "./MenuItems";
import "./navbar.css";
import footerlogo2 from "./images/footerlogo2.png";

//IMPORTING COMPONENTS
import { signout, isAuth } from "../../../src/authenticate/index";
import { itemtotal } from "./CartOperations";

// const isActive = (history, path) => {
//   if (history.location.pathname === path) {
//     return { color: "#ffffff" };
//   } else {
//     return { color: "#000000" };
//   }
// };

const Navbar = (props) => {
  return (
    <React.Fragment>
      <header className="toolbar shadow">
        <nav className="tool-navigation bg-info">
          <div>
            <DrawerToggleBotton click={props.drawerClickHander} />
          </div>
          <div className="toolbar-logo">
            <a href="/">
              <img
                src={footerlogo2}
                alt=""
                style={{ width: "70px", height: "50px" }}
              />
            </a>
          </div>
          <Search />
          <div
            className="toolbar-navigation-item"
            style={{ position: "fixed", left: "30%" }}
          >
            <ul>
              {MenuItems.map((items, index) => {
                return (
                  <li>
                    <Link
                      className={items.cName}
                      key={index}
                      // style={isActive(history, `/${items.url}`)}
                      to={`/${items.url}`}
                    >
                      <i
                        className={items.icon}
                        style={{ color: "#fff200" }}
                      ></i>
                      {items.title}
                      {/* <span className="sr-only">(current)</span> */}
                    </Link>
                  </li>
                );
              })}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  // style={isActive(history, "/productCart")}
                  to="/productCart"
                >
                  Cart{" "}
                  <i
                    className="fas fa-cart-plus"
                    style={{ color: "#fff200" }}
                  ></i>
                  <sup>
                    <small
                      className="cart-badge badge-success"
                      style={{
                        borderRadius: "50%",
                        padding: "2px",
                        fontSize: "12px",
                        fontStyle: "bold",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {itemtotal()}
                    </small>
                  </sup>
                </Link>
              </li>
              {isAuth() && isAuth().user.role === "1" && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    // style={isActive(history, "/admin/dashboard")}
                    to="/admin/dashboard"
                  >
                    <i class="fas fa-columns" style={{ color: "#fff200" }}></i>{" "}
                    Dashboard
                  </Link>
                </li>
              )}
              {isAuth() && isAuth().user.role === "0" && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    // style={isActive(history, "/user/dashboard")}
                    to="/user/dashboard"
                  >
                    <i class="fas fa-columns" style={{ color: "#fff200" }}></i>{" "}
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {!isAuth() && (
            <React.Fragment>
              <div className="auth">
                <p
                  className="my-md-4 header-links"
                  style={{
                    position: "fixed",
                    left: "83%",
                    top: 0,
                  }}
                >
                  <Link
                    className=""
                    // style={
                    //   (isActive(history, "/signin"),
                    //   { textDecoration: "none", color: "#000000" })
                    // }
                    style={{ textDecoration: "none", color: "#000000" }}
                    to="/signin"
                  >
                    &nbsp; LogIn{" "}
                    <i
                      class="fas fa-sign-in-alt"
                      style={{ color: "#fff200" }}
                    ></i>
                    &nbsp;
                  </Link>
                  <Link
                    className=""
                    // style={
                    //   (isActive(history, "/signup"),
                    //   { textDecoration: "none", color: "#000000" })
                    // }
                    style={{ textDecoration: "none", color: "#000000" }}
                    to="/signup"
                  >
                    &nbsp; SignUp{" "}
                    <i
                      class="fas fa-user-plus"
                      style={{ color: "#fff200" }}
                    ></i>
                  </Link>
                </p>
              </div>
            </React.Fragment>
          )}
          {isAuth() && (
            <div className="col-md-4 col-12 auth1">
              <p
                className="my-md-1 header-links"
                style={{
                  position: "fixed",
                  left: "90%",
                  top: 0,
                }}
              >
                <a
                  href="/signin"
                  className="nav-link"
                  style={{
                    cursor: "pointer",
                    color: "#ffffff",
                    fontSize: "1em",
                    textDecoration: "none",
                  }}
                  onClick={() => signout()}
                >
                  <i
                    class="fas fa-sign-out-alt"
                    style={{ color: "#fff200" }}
                  ></i>{" "}
                  SignOut
                </a>
              </p>
            </div>
          )}
        </nav>
      </header>
      <div className="spacer"></div>
    </React.Fragment>
  );
};
export default withRouter(Navbar);
