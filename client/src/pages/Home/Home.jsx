import { Component } from "react";
import Hero from "../../components/Hero/hero.jsx";
const axios = require("axios");

class Home extends Component {
  state = {
    heroList: [],
    selectedHero: "",
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/api/marvel/`).then((response) => {
      this.setState({
        selectedHero: response.data[1],
      });
    });
  }

  componentDidUpdate(prevProps) {
    const characterId = this.props.match.params.characterId;
    const prevCharacterId = prevProps.match.params.characterId;

    if (characterId !== prevCharacterId) {
      this.getCharacterById(characterId);
    }
  }

  getCharacterById = (id) => {
    axios
      .get("http://localhost:8080/api/marvel/" + id)
      .then((response) => {
        this.setState({
          selectedHero: response.data[0],
        });
      })
      .catch((error) => {});
  };

  render() {
    const { selectedHero } = this.state;

    if (!this.state.selectedHero) {
      return <p>Page loading...</p>;
    }

    return (
      <>
        <section>
          <Hero selectedHero={selectedHero} />
        </section>
      </>
    );
  }
}

export default Home;
