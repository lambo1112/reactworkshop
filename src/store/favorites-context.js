import { useState } from "react";
import { createContext } from "react";


const FavoritesContext = createContext({
    favorites:[],
    totalFavorites:0
});

function FavoritesContextProvider(props){
    const [userFavorites,setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((preUserFavorites)=>{
            return [...preUserFavorites,...favoriteMeetup]
        })
    }

    function removeFavoriteHandler(meetupID){
        setUserFavorites(preUserFavorites=>{
            return preUserFavorites.filter((meetup)=>{
                return meetup !== meetupID
            })
        })
    }

    function itemIsFavoriteHandler(meetupID){
        return userFavorites.some(meetup=> meetup === meetupID)
    }

    const context ={
        favorites:userFavorites,
        totalFavorites: userFavorites.length
    };

    return(
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider;