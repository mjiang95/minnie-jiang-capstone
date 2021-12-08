import "./Comics.scss";
import next from "../../assets/logo/next.jpg";
import { Link } from "react-router-dom";
import { Component } from "react";
const axios = require("axios");

class Comics extends Component {
  state = {
    selectedHero: [],
  };

  componentDidMount() {
    const characterId = this.props.match.params.characterId;

    axios
      .get(`http://localhost:8080/api/marvel/${characterId}/comics`)
      .then((response) => {
        this.setState({
          selectedHero: response.data,
        });
      });
  }

  render() {
    const selectedHero = this.state.selectedHero;

    return (
      <>
        <div className="comics">
          <div className="comics-header">
            <h2 className="hero-comics__title">Comics</h2>
            <Link
              to={`/character/${this.props.match.params.characterId}/series`}
            >
              <img className="next" src={next} alt="next" />
            </Link>
          </div>
          <div className="hero-comics">
            {selectedHero.map((hero) => {
              return (
                <>
                  <div className="hero-comics-card">
                    <a href={hero.urls[0].url}>
                      <img
                        className="hero-comics-image"
                        src={
                          hero.thumbnail.path +
                          "/portrait_medium." +
                          hero.thumbnail.extension
                        }
                        alt={hero.title}
                      />
                    </a>
                    <h2 className="hero-comics-name">{hero.title}</h2>
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

export default Comics;
