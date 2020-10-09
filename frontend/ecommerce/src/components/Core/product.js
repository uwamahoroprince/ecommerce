import React, { useState, useEffect } from "react";

import { display, displayRelated } from "./ApiRequest";
import ViewProduct from "./ViewProduct";
import ProductCard from "./ProductCard";
import "./product.css";
import Footer from "./footer";

const Product = (props) => {
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);

  const loadSingleProduct = (productId) => {
    display(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        // fetch related products
        displayRelated(data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data);
          }
        });
      }
    });
  };

  useEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
  }, [props]);

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-8 product">
          {product && product.description && (
            <ViewProduct product={product} showViewProductButton={false} />
          )}
        </div>

        <div className="col-2 related">
          <h6 className="alert alert-info">Related</h6>
          {relatedProduct.map((p, i) => (
            <div className="mb-3" key={i}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-6 ">
          <div className="related-down">
            <h6 className="alert alert-info">Related</h6>
            {relatedProduct.map((p, i) => (
              <div className="mb-3" key={i}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Product;
