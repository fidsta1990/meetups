import React, { useContext } from "react";
import Card from "../components/ui/Card";
import { FavouriteContext } from "../store/FavouriteContext";
import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  const faveCtx = useContext(FavouriteContext);

  const itemIsFavourite = faveCtx.itemFavourite(props.id);

  const toggleStatusHandler = () => {
    if (itemIsFavourite) {
      faveCtx.removeFavourite(props.id);
    } else {
      faveCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <div className={classes.actions}>
            <button onClick={toggleStatusHandler}>
              {itemIsFavourite ? "Remove from Favourites" : "To Favoruites"}
            </button>
          </div>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
