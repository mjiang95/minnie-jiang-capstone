import "./hero.scss";

function Hero(props) {

    console.log(props)
    return (
        <>
        <div>
        <img src={props.selectedHero.thumbnail.path + '/detail.' + props.selectedHero.thumbnail.extension} alt="" />
        <div>{props.selectedHero.name}</div>
        </div>
        <div>
            {props.selectedHero.description}
        </div>
        <div>
            {props.selectedHero.comics.available}
        </div>
        <div></div>
        <div>{props.selectedHero.series.available}</div>
        </>
    );
}

export default Hero;