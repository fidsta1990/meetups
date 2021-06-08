import React, { createContext, useState } from "react";

export const FavouriteContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favourite) => {},
  removeFavourite: (id) => {},
  itemFavourite: (id) => {},
});

const FavouriteContextProvider = (props) => {
  const [userFavourite, setUserFavourite] = useState([]);

  const addFavouriteHandler = (item) => {
    setUserFavourite((prevFavouriteState) => {
      return prevFavouriteState.concat(item);
    });
  };
  const removeFavouriteHandler = (id) => {
    setUserFavourite((prevFavouriteState) => {
      return prevFavouriteState.filter((favourite) => favourite.id !== id);
    });
  };
  const itemFavouriteHandler = (id) => {
    return userFavourite.some((favourite) => favourite.id === id);
  };

  const context = {
    favourites: userFavourite,
    totalFavourites: userFavourite.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemFavourite: itemFavouriteHandler,
  };

  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContextProvider;
