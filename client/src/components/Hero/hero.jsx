import "./hero.scss";
import Modal from "react-modal";
import React, { useState } from "react";
import heroDescription from "../../assets/images/sihouette-superhero.jpg";
import heroComics from "../../assets/images/marvel-comics.jpg";
import heroSeries from "../../assets/images/marvel-series.jpg";

function Hero(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenComic, setIsOpenComic] = useState(false);
  const [isOpenSeries, setIsOpenSeries] = useState(false);
  console.log(props);

  return (
    <>
    <section className="hero-wrapper">
      <div className="hero">
        <img className ="hero-image"
          src={
            props.selectedHero.thumbnail.path +
            "/detail." +
            props.selectedHero.thumbnail.extension
          }
          alt=""
        />
        <div className="hero-name">{props.selectedHero.name}</div>
      </div>
      <section className="cards-section">
        <div className= {`description-card ${isOpen && "button-active"}`} >
          <button
            className= "description-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              className="description-image" 
              src={heroDescription}
              alt="sihouette-superhero"
            />
          </button>
          <div className={`content ${isOpen && "open-content"}`}>
            <p>Hero Description</p>
            <div id="hero-description">
              <button className="description-modal" onClick={() => setModalIsOpen(true)}>Description</button>
              <Modal isOpen={modalIsOpen}>
                {props.selectedHero.description}
                <button onClick={() => setModalIsOpen(false)}>Close</button>
              </Modal>
            </div>
          </div>
        </div>
        <div className= {`comics-card ${isOpenComic && "button-active"}`}>
          <button
            className="comics-button"
            onClick={() => setIsOpenComic(!isOpenComic)}
          >
            <img className="comics-image" src={heroComics} alt="hero-comics" />
          </button>
          <div className={`content ${isOpenComic && "open-content"}`}>
            <p>Marvel Comicon</p>
            #{props.selectedHero.comics.available}
          </div>
        </div>
        <div className={`series-card ${isOpenSeries && "button-active"}`}>
          <button
            className="series-button"
            onClick={() => setIsOpenSeries(!isOpenSeries)}
          >
            <img className="series-image" src={heroSeries} alt="hero-series" />
          </button>
          <div className={`content ${isOpenSeries && "open-content"}`}>
            <p>Marvel Series Continuum</p>
            #{props.selectedHero.series.available}
          </div>
        </div>
      </section>
      </section>
    </>
  );
}

export default Hero;
