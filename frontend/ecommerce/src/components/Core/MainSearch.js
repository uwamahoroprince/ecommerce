import React, { useEffect, useState } from "react";
import ProductCard from "../Core/ProductCard";
import { fetchCategory, list } from "../Core/ApiRequest";
import "./MainSearch.css";
import search from "./images/search.png";

const Search = () => {
  const [data, setData] = useState({
    categories: [],
    category: "",
    search: "",
    results: [],
    searched: false,
  });

  const { categories, category, search, results, searched } = data;
  const displayCategories = () => {
    fetchCategory().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setData({ ...data, categories: data });
      }
    });
  };

  useEffect(() => {
    displayCategories();
  }, []);

  const handleChange = (name) => (e) => {
    setData({ ...data, [name]: e.target.value, searched: false });
  };

  const searchData = () => {
    // console.log(search, category);
    if (search) {
      list({ search: search || undefined, category: category }).then((res) => {
        if (res.error) {
          console.log(res.erro);
        } else {
          setData({ ...data, results: res, searched: true });
        }
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchData();
  };
  const searchMessage = (searched, results) => {
    if (searched && results.length > 0) {
      return (
        <h5 className="mt-4 mb-3 alert alert-success">{`FOUND ${results.length} products`}</h5>
      );
    }
    if (searched && results.length < 1) {
      return (
        <h5 className="mt-4 mb-4 alert alert-danger">
          No Product Found At All
        </h5>
      );
    }
  };
  const searchedProduct = (results = []) => {
    return (
      <React.Fragment>
        <h5 className="mt-4 mb-4">{searchMessage(searched, results)}</h5>
        <div className="row">
          {results.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </React.Fragment>
    );
  };
  const searchForm = () => {
    return (
      <React.Fragment>
        <div class="header_search">
          <form action="#" id="header_search_form" onSubmit={handleSubmit}>
            {/* <select className="btn " onChange={handleChange("category")}>
              <option className="text" value="All">
                All
              </option>
              {categories.map((cat, index) => (
                <option key={index} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select> */}
            <input
              type="text"
              class="search_input"
              placeholder="Search Item"
              required="required"
              onChange={handleChange("search")}
            />
            <button class="header_search_button">
              <img src={search} alt="" />
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  };
  return (
    <React.Fragment>
      <div className="container offset-1">{searchForm()}</div>
      {/* {JSON.stringify(results)} */}
      <div className="fluid mt-5">{searchedProduct(results)}</div>
    </React.Fragment>
  );
};
export default Search;
