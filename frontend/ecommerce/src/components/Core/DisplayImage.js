import React from "react";
import "./DisplayImage.css";
const DisplayImage = ({ item, url }) => {
  return (
    <div className="product-image">
      <img
        src={`${process.env.REACT_APP_URL}/${url}/photo/${item._id}`}
        alt={item.name}
        className="card-img-top"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      />
    </div>
  );
};
export default DisplayImage;
