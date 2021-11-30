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
        selectedHero: {},
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
            
            return (
              <>
              <section>
                <PageNavScroll heroList = {this.state.heroList} />
                <Hero heroList = {this.state.heroList} />
                <HeroCards heroList = {this.state.heroList} />
              </section>
              </>
                );
            }
        }

export default Home;