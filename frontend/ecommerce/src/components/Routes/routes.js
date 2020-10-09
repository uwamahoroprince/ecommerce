import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//IMPORTING COMPONENTS
import Signup from "../user/Signup";
import Signin from "../user/Signin";
import Home from "../Home/Home";
import Shopping from "../Core/shopping";
import Navbar from "../Core/Navbar";
import SideDrawer from "../Core/SideDrawer";
import BackDrop from "../Core/BackDrop";
import Search from "../Core/MainSearch";
import ProtectedRoute from "../../authenticate/ProtectedRoute";
import ProtectedAdminRoute from "../../authenticate/ProtectedAdminRoute";
import Dashboard from "../user/userAcount";
import AdminDashboard from "../user/AdminDashboard";
import InsetCategory from "../Admin/insertCat";
import InsertProduct from "../Admin/insertProduct";
import Product from "../Core/product";
import Cart from "../Core/Cart";
import Orders from "../../components/Admin/Orders";
import Profile from "../user/Profile";
import ManageProducts from "../../components/Admin/ManageProducts";
import UpdateProduct from "../../components/Admin/updateProduct";
import UpdateCategory from "../../components/Admin/updateCategory";
const Routes = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  const backDropClickHandler = () => {
    setSideDrawerOpen(false);
  };
  let sideDrawer;
  let backDrop;
  if (sideDrawerOpen) {
    sideDrawer = (
      <SideDrawer
        click={backDropClickHandler}
        show={sideDrawerOpen}
        close={setSideDrawerOpen}
      />
    );
    backDrop = <BackDrop />;
  }

  return (
    <BrowserRouter>
      <Navbar drawerClickHander={drawerToggleClickHandler} />
      {sideDrawer}
      {backDrop}
      {/* <Search /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shopping" exact component={Shopping} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />

        <Route path="/productCart" exact component={Cart} />

        <ProtectedAdminRoute
          path="/admin/dashboard"
          exact
          component={AdminDashboard}
        />
        <ProtectedAdminRoute
          path="/create/category"
          exact
          component={InsetCategory}
        />

        <ProtectedAdminRoute
          path="/product/create/"
          exact
          component={InsertProduct}
        />
        <ProtectedRoute path="/user/dashboard" exact component={Dashboard} />
        <ProtectedRoute
          path="/admin/products"
          exact
          component={ManageProducts}
        />
        <ProtectedAdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <ProtectedAdminRoute
          path="/admin/category/update/:categoryId"
          exact
          component={UpdateCategory}
        />
        <ProtectedAdminRoute path="/admin/orders" exact component={Orders} />
        <ProtectedRoute path="/profile/:userId" exact component={Profile} />
        <Route path="/product/:productId" component={Product} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
