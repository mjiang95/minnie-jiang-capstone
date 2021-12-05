import "./SearchBar.scss";
import searchIcon from "../../assets/icons/search_icon_152764.png";
import { Link } from "react-router-dom";
import { Component } from "react";
const axios = require("axios");


class SearchBar extends Component {
  state = {
    heroSearchResults: [], 
    filteredData: [],
    setFilteredData: []
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/api/marvel/`).then((response) => {
      this.setState({
        heroSearchResults: response.data,
      });
      console.log(this.state.heroSearchResults);
    });
  }

  render() {
    const heroSearchArray = this.state.heroSearchResults;
    const handleFilter = (e) => {
      const searchWord = e.target.value
      const newFilter = heroSearchArray.filter((value) => {
        return value.name.includes(searchWord);
      })
      this.setState({
        filteredData: newFilter
      })
    }

    const filterHeroArray = this.state.filteredData;
    console.log(filterHeroArray);



    return (
      <>
        <div className="search-bar__wrapper">
          <div className="search-input">
          <input className="input" type="text" placeholder= "Type to search..." onChange={handleFilter}/>
          {filterHeroArray.length != 0 && (
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
