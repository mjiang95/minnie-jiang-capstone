import "./Home.scss";
import { Link } from "react-router-dom";
import { Component } from 'react';
import PageNavScroll from "../../components/PageNavScroll/PageNavScroll.jsx";
import Hero from "../../components/Hero/hero.jsx";
import HeroCards from "../../components/HeroCards/HeroCards.jsx";
const axios = require("axios");

class Home extends Component {
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

      componentDidUpdate(prevProps) {
        const characterId = this.props.match.params.characterId;
        const prevCharacterId = prevProps.match.params.characterId; 
  
        if (characterId !== prevCharacterId) {
          this.getCharacterById(characterId);
        }
      }

      getCharacterById = (id) => {
        axios
        .get("http://localhost:8080/api/marvel" + id)
        .then((response) => {
  
          this.setState ({
            selectedHero: response.data  
          });
        });
      }

      
        render() {

          const { heroList, selectedHero } = this.state;
            
            return (
              <>
              <section>
                <Hero selectedHero = {selectedHero} />
                <HeroCards selectedHero = {selectedHero} />
              </section>
              </>
                );
            }
        }

export default Home;