import React from "react";
//IMPORTING MUDELS
import "./BackDrop.css";

const BackDrop = (props) => {
  return <div className="back-drop" onClick={props.click} />;
};
export default BackDrop;
