import "./Series.scss";
import { Link } from "react-router-dom";
import { Component } from 'react';

class Series extends Component {
    state = {
        selectedHero: {}
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

    return (
        <>
        <Link to="/">
            <img src="" alt="" />
        </Link>
        </>
    );

    }
};

export default Series;