import "./Series.scss";
import next from "../../assets/logo/next.jpg";
import { Link } from "react-router-dom";
import { Component } from "react";
const axios = require("axios");

class Series extends Component {
  state = {
    selectedHeroSeries: [],
  };

  componentDidMount() {
    const characterId = this.props.match.params.characterId;

    axios
      .get(`http://localhost:8080/api/marvel/${characterId}/series`)
      .then((response) => {
        this.setState({
          selectedHeroSeries: response.data,
          cardsAppear: response.data,
        });
      });
  }

  render() {
    const { selectedHeroSeries } = this.state;

    return (
      <>
        <div className="series">
          <div className="series-header">
            <h2 className="hero-series__title">Series</h2>
            <Link
              to={`/character/${this.props.match.params.characterId}/comics`}
            >
              <img className="next" src={next} alt="next" />
            </Link>
          </div>
          <div className="hero-series">
            {selectedHeroSeries.map((hero) => {
              return (
                <>
                  <div className="hero-series-card">
                    <Link to={`/${hero.urls.url}`}>
                      <img
                        className="hero-series-image"
                        src={
                          hero.thumbnail.path +
                          "/portrait_medium." +
                          hero.thumbnail.extension
                        }
                        alt={hero.title}
                      />
                    </Link>
                    <h2 className="hero-series-name">{hero.title}</h2>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Series;
