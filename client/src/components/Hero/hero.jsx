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
      <div>
        <img
          src={
            props.selectedHero.thumbnail.path +
            "/detail." +
            props.selectedHero.thumbnail.extension
          }
          alt=""
        />
        <div>{props.selectedHero.name}</div>
      </div>
      <section className="cards-section">
        <div className="description-card">
          <button
            className="description-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              className="description-image"
              src={heroDescription}
              alt="sihouette-superhero"
            />
          </button>
          <div className={`content ${isOpen && "open-content"}`}>
            <h2>Hero Description</h2>
            <div id="hero-description">
              <button onClick={() => setModalIsOpen(true)}>Description</button>
              <Modal isOpen={modalIsOpen}>
                {props.selectedHero.description}
                <button onClick={() => setModalIsOpen(false)}>Close</button>
              </Modal>
            </div>
          </div>
        </div>
        <div className="comics-card">
          <button
            className="comics-button"
            onClick={() => setIsOpenComic(!isOpenComic)}
          >
            <img className="comics-image" src={heroComics} alt="hero-comics" />
          </button>
          <div className={`content ${isOpenComic && "open-content"}`}>
            {props.selectedHero.comics.available}
          </div>
        </div>
        <div className="series-card">
          <button
            className="series-button"
            onClick={() => setIsOpenSeries(!isOpenSeries)}
          >
            <img className="series-image" src={heroSeries} alt="hero-series" />
          </button>
          <div className={`content ${isOpenSeries && "open-content"}`}>
            {props.selectedHero.series.available}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
