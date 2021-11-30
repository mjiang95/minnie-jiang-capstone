import "./hero.scss";

function Hero(props) {

    console.log(props)
    return (
        <>
            <div>{props.thumbnail.path + '/portrait_xlarge.' + props.thumbnail.extension}</div>
        </>
    );
}

export default Hero;