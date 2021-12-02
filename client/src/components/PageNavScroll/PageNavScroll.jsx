import "./PageNavScroll.scss";
import { Link } from "react-router-dom";
import { Component } from "react";
const axios = require("axios");

class PageNavScroll extends Component {
  state = {
    heroList: [],
    selectedHero: {}
  };

  componentDidMount() {
    // const characterId = this.props.match.params.characterId;

    axios.get(`http://localhost:8080/api/marvel/`).then((response) => {
      this.setState({
        heroList: response.data,
      });
    });
  }

  render() {
    const heroArray = this.state.heroList;

    return (
      <>
      
      <div className="hero-scroll-menu">
        {heroArray.map((hero) => {
          return (
            <>
              <Link to={`/${hero.id}`}>
                <img className="hero-scroll"
                  src={
                    hero.thumbnail.path +
                    "/portrait_medium." +
                    hero.thumbnail.extension
                  }
                  alt={hero.name}
                />
              </Link>
            </>
          );
        })}
         </div>
      </>
    );
  }
}

export default PageNavScroll;
