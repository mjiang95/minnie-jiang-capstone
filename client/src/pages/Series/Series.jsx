import "./Series.scss";
import { Link } from "react-router-dom";
import { Component } from 'react';
const axios = require("axios");

class Series extends Component {
    state = {
        selectedHero: null
    };

    componentDidMount () {
        const characterId = this.props.match.params.characterId;

        axios
            .get(`http://localhost:8080/api/marvel/${characterId}/series`)
            .then ((response) => {
                this.setState({
                    selectedHero: response.data.data.results
                })
                console.log(response.data);
                console.log(this.state.selectedHero);
            })
        };   

    render() {
      const {selectedHero} = this.state;

    return (
        <>
        <div>      
              {selectedHero.map((hero) => {
          return (
            <>
              <Link to={`/${hero.urls.url}`}>
                <img className="hero-image"
                  src={
                    hero.thumbnail.path +
                    "/portrait_medium." +
                    hero.thumbnail.extension
                  }
                  alt={hero.title}
                />
                </Link>
              <h2>{hero.title}</h2>
            </>
          );
        })}
        </div>      
        </>
    );

    }
};

export default Series;