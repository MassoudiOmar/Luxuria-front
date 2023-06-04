import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import axios from "axios";
function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [title, setTitles] = useState([]);

  const handleSearch = () => {
    // Filter the products based on the search term
    const filteredResults = products.filter((product) =>
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  const products = title;

  const getNames = () => {
    axios
      .get("http://localhost:5000/api/products/getNames")
      .then((response) => {
        setTitles(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleSearch();
    getNames();
  }, [searchTerm]);

  return (
    <nav className="Navbar-header">
      <span className="categorie-nav">Men</span>
      <span className="categorie-nav">Women</span>
      <span className="categorie-nav">Kids</span>
      <span className="flex-span"></span>
      <div className="search-bar-container">
        <input
          className="search-bar"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Search for product"
        />
        <input className="search-button" type="submit" value="SEARCH" />
        {searchTerm?.length > 1 && (
          <div className="search-results">
            {searchResults.slice(0, 6).map((product) => (
              <div key={product.id} className="search-result-item">
                <span className="search-bar-data">
                  <Link
                    style={{ textDecoration: "none", color: "#000" }}
                    to={`/categories/${product.category}`}
                    onClick={() => {
                      searchResults("");
                    }}
                  >
                    {product.category}
                  </Link>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <span className="flex-span"></span>
      <span className="categorie-nav-two">Bonjour, Omar</span>
      <span className="categorie-nav-two">About us</span>
      <Link to="/panier" style={{ textDecoration: "none", color: "#000" }}>
        <span className="categorie-nav-two">Panier</span>
      </Link>
      <span className="flex-span"></span>
    </nav>
  );
}

export default Navbar;
