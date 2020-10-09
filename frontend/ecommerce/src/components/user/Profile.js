import React, { useState, useEffect } from "react";
import { isAuth } from "../../authenticate";
import { Redirect } from "react-router-dom";
import { read, update, updateUser } from "./apiUser";
import Footer from "../Core/footer";

const Profile = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: false,
    success: false,
  });

  const { token } = isAuth();
  const { name, email, password, error, success } = values;

  const init = (userId) => {
    // console.log(userId);
    read(userId, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: true });
      } else {
        setValues({ ...values, name: data.name, email: data.email });
      }
    });
  };

  useEffect(() => {
    init(match.params.userId);
  }, []);

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    update(match.params.userId, token, { name, email, password }).then(
      (data) => {
        if (data.error) {
          // console.log(data.error);
          alert(data.error);
        } else {
          updateUser(data, () => {
            setValues({
              ...values,
              name: data.name,
              email: data.email,
              success: true,
            });
          });
        }
      }
    );
  };

  const redirectUser = (success) => {
    if (success) {
      return <Redirect to="/ProductCart" />;
    }
  };

  const profileUpdate = (name, email, password) => (
    <form>
      <h4 className="mb-4">Profile update</h4>
      <div className="form-group">
        <label className="text-muted text-center">Name</label>
        <input
          type="text"
          onChange={handleChange("name")}
          className="form-control text-center"
          value={name}
        />
      </div>{" "}
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          type="email"
          onChange={handleChange("email")}
          className="form-control text-center"
          value={email}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          type="password"
          onChange={handleChange("password")}
          className="form-control text-center"
          value={password}
        />
      </div>
      <button onClick={clickSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  );

  return (
    <React.Fragment>
      <div
        className="d-flex justify-content-center"
        style={{
          marginTop: "5rem",
          marginBottom: "1rem",
        }}
      >
        {profileUpdate(name, email, password)}
        {redirectUser(success)}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Profile;
