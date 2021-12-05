import React, { useState } from "react";
import "./SearchBar.scss";
import searchIcon from "../../assets/icons/search_icon_152764.png";
import { Link } from "react-router-dom";
import { Component } from "react";
const axios = require("axios");


class SearchBar extends Component {
  state = {
    heroSearchResults: [], 
    filteredData: [],
    setFilteredData: [],
    setWordEntered: " "
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/api/marvel/`).then((response) => {
      this.setState({
        heroSearchResults: response.data,
      });
      console.log(this.state.heroSearchResults);
    });
  }

  clearInput = () => {
    this.setState({
    setFilteredData: [],
    setWordEntered: " "
  })
  };

  render() {
    const filterHeroArray = this.state.filteredData;
    const handleFilter = (e) => {
      const searchWord = e.target.value
      const newFilter = this.state.heroSearchResults.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
      })
      this.setState({
        filteredData: newFilter
      })
    }
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }

    return (
      <>
        <div className="search-bar__wrapper">
          <div className="search-input">
          <input className="input" type="text" placeholder= "Type to search..." onChange={handleFilter}/>
          {filteredData.length != 0 && (
          <div className="autocomplete-box">
            {filterHeroArray.map((results) => {
              return (
                <>
                <ul className = "itemslist">
                    <Link to={`/character/${results.id}`}>
                      <li className= "items">{results.name}</li>
                    </Link>
                  </ul>
                </>
              );
            })}
          </div>
          )}
          <button className="search-button">
            <img className="search-icon" src={searchIcon}></img>
          </button>
          </div>
        </div>
      </>
    );
  }
}

export default SearchBar;
