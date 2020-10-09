import React from "react";
import "./SideDrawer.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
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
const SideDrawer = (props) => {
  let drawerclasses = "side-drawer";
  if (props.show) {
    drawerclasses = "side-drawer open";
  }

  return (
    <div className={drawerclasses}>
      <i class="fas fa-times button1" onClick={props.click}></i>

      <nav></nav>
      <ul>
        {MenuItems.map((items, index) => {
          return (
            <li>
              <Link
                onClick={props.click}
                className={items.cName}
                key={index}
                // style={isActive(history, `/${items.url}`)}
                to={`/${items.url}`}
              >
                <i className={items.icon}></i>
                &nbsp; {items.title}
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
            onClick={props.click}
          >
            <i className="fas fa-cart-plus"></i> &nbsp; Cart
            <sup>
              <small
                className="cart-badge badge-info"
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
              onClick={props.click}
            >
              <i class="fas fa-columns"></i> &nbsp; Dashboard
            </Link>
          </li>
        )}
        {isAuth() && isAuth().user.role === "0" && (
          <li className="nav-item">
            <Link
              className="nav-link"
              // style={isActive(history, "/user/dashboard")}
              to="/user/dashboard"
              onClick={props.click}
            >
              &nbsp; Dashboard
            </Link>
          </li>
        )}
      </ul>
      <div>
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
                  onClick={props.click}
                >
                  &nbsp; LogIn <i class="fas fa-sign-in-alt"></i>
                </Link>
                <Link
                  className=""
                  // style={
                  //   (isActive(history, "/signup"),
                  //   { textDecoration: "none", color: "#000000" })
                  // }
                  style={{ textDecoration: "none", color: "#000000" }}
                  to="/signup"
                  onClick={props.click}
                >
                  &nbsp; SignUp <i class="fas fa-user-plus"></i>
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
                left: "83%",
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
                &nbsp; SignOut <i class="fas fa-sign-out-alt"></i>
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default SideDrawer;
