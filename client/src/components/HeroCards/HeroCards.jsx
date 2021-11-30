import "./HeroCards.scss";
import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HeroCards({selectedHero}) {
    // axios
    // .get(`http://localhost:8080/`)
    // .then ((response) => {
    //     this.setState({
    //         selectedHero: response.data[0].thumbnail
    //         })
    //     })
    // };
    return (
        <>
        <Link to="/">
            <img src="" alt="" />
        </Link>
        </>
    );
}

export default HeroCards;