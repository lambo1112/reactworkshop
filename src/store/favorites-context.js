import { useState } from "react";
import { createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupid) => {},
  itemIsFavorite: (meetupid) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((preUserFavorites) => {
      return preUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupID) {
    setUserFavorites((preUserFavorites) => {
      return preUserFavorites.filter((meetup) => {
        return meetup.id !== meetupID;
      });
    });
  }

  function itemIsFavoriteHandler(meetupID) {
    return userFavorites.some((meetup) => meetup.id === meetupID);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
