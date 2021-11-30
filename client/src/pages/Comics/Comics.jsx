import "./Comics.scss";
import { Link } from "react-router-dom";
import { Component } from "react";

class Comics extends Component {
  state = {
    selectedHero: {},
  };

  componentDidMount() {
    // const characterId = this.props.match.params.characterId;

    axios.get(`http://localhost:8080/api/marvel/`).then((response) => {
      this.setState({
        heroList: response.data,
      });
      let list = response.data.map((hero) => {
        return (
          hero.thumbnail.path + "portrait_xlarge." + hero.thumbnail.extension
        );
      });
      console.log(list);
      console.log(this.state.heroList);
    });
  }

  render() {
    const heroSelected = this.state.selectedHero;

    return (
      <>
        {heroSelected.map((hero) => {
          return (
            <>
              <div>{hero.name}</div>
              <div>
                <img
                  src={
                    hero.thumbnail.path +
                    "/portrait_xlarge." +
                    hero.thumbnail.extension
                  }
                  alt={hero.name}
                />
              </div>
              <div>{hero.comics}</div>
              <div></div>
            </>
          );
        })}
      </>
    );
  }
}

export default Comics;
