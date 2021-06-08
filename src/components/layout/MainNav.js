import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";
import { FavouriteContext } from "../../store/FavouriteContext";

const MainNav = () => {
  const faveCtx = useContext(FavouriteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new">New Meetups</Link>
        </li>
        <li>
          <Link to="/favourites">Favourites</Link>
          <span className={classes.badge}>{faveCtx.totalFavourites}</span>
        </li>
      </ul>
    </header>
  );
};

export default MainNav;
