import React from "react";
import "./drawerToggleButton.css";

const DrawerToggleBotton = (props) => {
  return (
    <button className="toggle-button" onClick={props.click}>
      <div className="drawer-button-line"></div>
      <div className="drawer-button-line"></div>
      <div className="drawer-button-line"></div>
    </button>
  );
};
export default DrawerToggleBotton;
