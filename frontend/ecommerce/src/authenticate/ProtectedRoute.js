import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuth } from "../../src/authenticate/index";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/signin", state: { form: props.location } }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
