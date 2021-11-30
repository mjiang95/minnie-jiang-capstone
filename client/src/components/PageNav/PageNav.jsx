import "./PageNav.scss";
import { Link, NavLink } from "react-router-dom";

function PageNav() {
  
  return (
    <>
      <section>
        <div>HeroSearch</div>
        <div>Did you say comics?</div>
        <div>How about series?</div>
      </section>
      <div className="PageNav__hero">
        <h1 className="PageNav__hero--title">
          Find your favorite Marvel Superhero!
        </h1>
        <h2 className="PageNav__hero--subtitle">
          HeroSearch is your source to find the latest hero news
        </h2>
      </div>
    </>
  );
}

export default PageNav;
