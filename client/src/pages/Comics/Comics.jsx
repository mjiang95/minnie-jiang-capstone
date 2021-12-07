import "./Comics.scss";
import { Link } from "react-router-dom";
import { Component } from "react";
const axios = require("axios");

class Comics extends Component {
  state = {
    selectedHero: []
  };

  componentDidMount() {
    const characterId = this.props.match.params.characterId;

    axios.get(`http://localhost:8080/api/marvel/${characterId}/comics`).then((response) => {
      this.setState({
        selectedHero: response.data,
      });
      console.log(this.state.selectedHero);
    });
  }

  render() {
    const selectedHero = this.state.selectedHero;

    return (
      <>
          <div className = "hero-comics">      
              {selectedHero.map((hero) => {
          return (
            <>
            <div className="hero-comics-card">
              <Link to={`/${hero.urls.url}`}>
                <img className="hero-comics-image"
                  src={
                    hero.thumbnail.path +
                    "/portrait_medium." +
                    hero.thumbnail.extension
                  }
                  alt={hero.title}
                />
                </Link>
              <h2 className="hero-comics-name">{hero.title}</h2>
              </div>
            </>
          );
        })}
        </div>      
      </>
    );
  }
}

export default Comics;
