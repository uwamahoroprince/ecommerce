import React from "react";
import { Link } from "react-router-dom";

//IMPORTING CUSTOM COMPONENTS
import { isAuth } from "../../authenticate/index";
import Footer from "../Core/footer";

const AdimnDashboard = () => {
  const { user } = isAuth();

  const AdminLinks = () => {
    return (
      <div className="container center">
        <div className="card" style={{ marginTop: "10rem" }}>
          <h4 className="card-header bg-dark">
            <h6 className="text-center text-success">Controls</h6>
          </h4>
          <ul className="list-group ">
            <li className="list-group-item bg-secondary ">
              <Link className="nav-link" to="/create/category">
                Create Category
              </Link>
            </li>
            <li className="list-group-item bg-secondary">
              <Link className="nav-link" to="/product/create/">
                Create Product
              </Link>
            </li>
            <li className="list-group-item bg-secondary ">
              <Link className="nav-link" to="/admin/orders">
                View Orders
              </Link>
            </li>
            <li className="list-group-item bg-secondary ">
              <Link className="nav-link" to="/admin/products">
                Manage Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  const accountInfo = () => {
    return (
      <div className="container center" style={{ margin: "5rem 2rem" }}>
        <div className="card mb-5 bg-info">
          <h3 className="card-header text-center">Admin Account Info</h3>
          <ul className="list-group">
            <li className="list-group-item"> {user.name}</li>
            <li className="list-group-item">{user.email}</li>
            <li className="list-group-item">Admin</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="row" style={{ margin: "5rem" }}>
        <div className="col-md-4 col-sm-12 col-12">{AdminLinks()}</div>
        <div className="col-md-8 col-sm-12 col-lg-8">{accountInfo()}</div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default AdimnDashboard;
