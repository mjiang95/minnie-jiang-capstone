import "./PageNav.scss";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { Component } from "react";
const axios = require("axios");

class PageNav extends Component {
  state = {
    heroList: [],
    selectedHero: {},
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/api/marvel/`).then((response) => {
      this.setState({
        heroList: response.data[0],
      });
    });
  }

  render() {
    const heroArray = this.state.heroList;

    return (
      <>
        <section className="PageNav">
          <div className="header">
            <div className="PageNav-title">HeroSearch</div>
            <Link
              className="PageNav-link"
              to={`/comics`}
            >
              <div className="PageNav-subtitle">Did you say comics?</div>
            </Link>
            <Link
              className="PageNav-link"
              to={`/series`}
            >
              <div className="PageNav-subtitle">How about series?</div>
            </Link>
            <SearchBar />
          </div>
          <div className="PageNav__hero">
            <h1 className="PageNav__hero--title">
              Find your favorite Marvel Superhero!
            </h1>
            <h2 className="PageNav__hero--subtitle">
              HeroSearch is your source to find the latest hero news
            </h2>
          </div>
        </section>
      </>
    );
  }
}

export default PageNav;
