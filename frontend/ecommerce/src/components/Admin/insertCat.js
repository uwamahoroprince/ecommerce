import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuth } from "../../authenticate/index";
import { createCategory } from "../Admin/ApiRequest";

const InsetCategory = () => {
  //destructuring user and token
  const { user, token } = isAuth();

  //decraring state
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  //handle change method
  const handleChange = (e) => {
    setError("");
    setName(e.target.value);
  };

  //handle submit form method
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // API REQUEST TO CREATE CATEGORY
    createCategory(user._id, token, { name }).then((data) => {
      if (data.message) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
      }
    });
  };

  // SUCCESS OUTPUT MESSAGE

  const displaySuccess = () => {
    if (success) {
      return (
        <div className="alert alert-info">
          {name} category created successfuly
        </div>
      );
    }
  };

  // ERROR OUTPUT MESSAGES

  const displayError = () => {
    if (error) {
      return (
        <div className="alert alert-danger">{name} category alredy exist</div>
      );
    }
  };
  // Back link

  const back = () => (
    <div className="mt-5">
      <Link className="nav-link text-info offset-3" to="/admin/dashboard">
        Back To Dashboard
      </Link>
    </div>
  );

  const CategoryForm = () => {
    return (
      <div className="container center" style={{ paddingTop: "20px" }}>
        <div className="card ">
          <h4 className="card-header text-info">Create New Category</h4>

          <form onSubmit={handleSubmit} style={{ margin: "10px" }}>
            <div className="form-group  ">
              <label className="text-muted">
                {" "}
                {displayError()}
                {displaySuccess()}
              </label>
              <input
                placeholder="Category Name"
                type="text"
                className="form-control center"
                onChange={handleChange}
                value={name}
                autoFocus
                required
              />
            </div>
            <button className="btn btn-outline-primary offset-4">
              Add category
            </button>
            {back()}
          </form>
        </div>
      </div>
    );
  };
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">{CategoryForm()}</div>
    </div>
  );
};
export default InsetCategory;
