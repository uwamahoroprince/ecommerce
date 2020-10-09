import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { fetchCategory, fetchFilterdProduct } from "./ApiRequest";
import Checkbox from "./CheckBox";
import RadioButton from "./RadioButton";
import { prices } from "./StaticPrice";
import Footer from "./footer";

const Shop = () => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] },
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);

  const init = () => {
    fetchCategory().then((data) => {
      if (data.error) {
        setError(data.error);
        console.log(error);
      } else {
        setCategories(data);
      }
    });
  };

  const loadFilteredResults = (newFilters) => {
    // console.log(newFilters);
    fetchFilterdProduct(skip, limit, newFilters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  const loadMore = () => {
    let toSkip = skip + limit;
    // console.log(newFilters);
    fetchFilterdProduct(toSkip, limit, myFilters.filters).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults([...filteredResults, ...data.data]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-warning mb-5">
          Load more
        </button>
      )
    );
  };

  useEffect(() => {
    init();
    loadFilteredResults(skip, limit, myFilters.filters);
  }, []);

  const handleFilters = (filters, filterBy) => {
    // console.log("SHOP", filters, filterBy);
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;

    if (filterBy === "price") {
      let priceValues = handlePrice(filters);
      newFilters.filters[filterBy] = priceValues;
    }
    loadFilteredResults(myFilters.filters);
    setMyFilters(newFilters);
  };

  const handlePrice = (value) => {
    const data = prices;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
    }
    return array;
  };

  return (
    // <div className="col-4">
    // <h4>Filter by categories</h4>
    // <ul>
    //  <Checkbox
    //    categories={categories}
    // handleFilters={(filters) => handleFilters(filters, "category")}
    // />
    //    </ul>

    //<h4>Filter by price range</h4>
    //    <div>
    // <RadioButton
    // prices={prices}
    // handleFilters={(filters) => handleFilters(filters, "price")}
    //   />
    // </div>
    // </div>

    <React.Fragment>
      <div className="row">
        <div
          className="row justify-content-center"
          style={{ margin: "5rem 2rem" }}
        >
          {filteredResults.map((product, i) => (
            <div key={i} className="col-md-3 col-sm-3 col-6 col-lg-2">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <hr />
      {loadMoreButton()}
      <Footer />
    </React.Fragment>
  );
};

export default Shop;
