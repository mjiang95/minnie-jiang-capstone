import "./PublicSeries.scss";
import next from "../../assets/logo/next.jpg";
import { Link } from "react-router-dom";
import { Component } from "react";
const axios = require("axios");

class PublicSeries extends Component {
  state = {
    seriesArray: [],
  };

  componentDidMount() {

    axios
      .get(`http://localhost:8080/api/series`)
      .then((response) => {
        this.setState({
          seriesArray: response.data
        });
      });
  }

  render() {
    const { seriesArray } = this.state;

    return (
      <>
        <div className="series">
          <div className="series-header">
            <h2 className="hero-series__title">Marvel Series</h2>
            <Link
              to={`/comics`}
            >
              <img className="next" src={next} alt="next" />
            </Link>
          </div>
          <div className="hero-series">
            {seriesArray.map((hero) => {
              return (
                <>
                  <div className="hero-series-card">
                  <a href={hero.urls[0].url} target="_blank">
                      <img
                        className="hero-series-image"
                        src={
                          hero.thumbnail.path +
                          "/portrait_medium." +
                          hero.thumbnail.extension
                        }
                        alt={hero.title}
                      />
                    </a>
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

export default PublicSeries;
