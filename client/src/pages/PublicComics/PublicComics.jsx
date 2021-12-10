import "./PublicComics.scss";
import next from "../../assets/logo/next.jpg";
import { Link } from "react-router-dom";
import { Component } from "react";
const axios = require("axios");

class PublicComics extends Component {
    state = {
      comicsArray: [],
    };
  
    componentDidMount() {
  
      axios
        .get(`http://localhost:8080/api/comics`)
        .then((response) => {
          this.setState({
            comicsArray: response.data,
          });
        });
    }
  
    render() {
      const comicsList = this.state.comicsArray;
  
      return (
        <>
          <div className="comics">
            <div className="comics-header">
              <h2 className="hero-comics__title">Marvel Comicon</h2>
              <Link
                to={`/character/${this.props.match.params.characterId}/series`}
              >
                <img className="next" src={next} alt="next" />
              </Link>
            </div>
            <div className="hero-comics">
              {comicsList.map((hero) => {
                return (
                  <>
                    <div className="hero-comics-card">
                      <a href={hero.urls[0].url} target="_blank">
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
  
  export default PublicComics;
  