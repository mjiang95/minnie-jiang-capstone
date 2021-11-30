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

    componentDidMount () {
        const selectedHeroId = this.props.match.params.selectedHeroId;

        axios
            .get("http://localhost:8080/api/marvel")
            .then ((response) => {
                this.setState({
                    heroList: response.data
                })
                console.log(response.data)
                console.log(this.state.heroList);
            })
        };

        render() {
  
            return (
              <>
              <section>
                <PageNavScroll />
                <Hero />
                <HeroCards />
              </section>
              </>
                );
            }
        }

export default Home;