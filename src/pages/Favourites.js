import React, { useContext } from "react";
import { FavouriteContext } from "../store/FavouriteContext";
import MeetupList from "./MeetupList";

const Favourites = () => {
  const faveCtx = useContext(FavouriteContext);

  let content;
  if (faveCtx.totalFavourites === 0) {
    content = <p>No favourites added. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={faveCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites ❤️</h1>
      {content}
    </section>
  );
};

export default Favourites;
