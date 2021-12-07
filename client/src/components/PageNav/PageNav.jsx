import "./PageNav.scss";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function PageNav() {
  
  return (
    <>
    <section className="PageNav">
      <div className="header">
        <div className="PageNav-title">HeroSearch</div>
        {/* <Link to={`/character/${hero.id}`/comics}> */}
        <div className="PageNav-subtitle">Did you say comics?</div>
        {/* </Link> */}
        {/* <Link to={`/character/${hero.id}`/series}> */}
        <div className="PageNav-subtitle">How about series?</div>
        {/* </Link> */}
        <SearchBar />
      </div>
      <div className="PageNav__hero">
        <h1 className="PageNav__hero--title">
          Find your favorite Marvel Superhero!
        </h1>
        <h2 className="PageNav__hero--subtitle">
          HeroSearch is your source to find the latest hero news
        </h2>
      </div>
      </section>
    </>
  );
}

export default PageNav;
