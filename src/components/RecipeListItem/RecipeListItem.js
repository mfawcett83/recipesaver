import React, { useContext } from "react";
import FavoritesContext from "./context";

const RecipeListItem = props => {
  const {
    state: { favorites = [] },
    dispatch
  } = useContext(FavoritesContext);

  const { id } = props;

  const recipeObj = {
    id
  };

  const isFavorite = favorites.find(favorite => favorite.id === id);

  return (
    <div className="recipeContainer">
      <img className="recipe" src={id} alt={id} />
      <img
        className="heart"
        onClick={() => dispatch({ type: "TOGGLE_FAVORITE", payload: recipeObj })}
        src={
          isFavorite
            ? "https://icon.now.sh/heart/ff0000"
            : "https://icon.now.sh/heart/d3d3d3"
        }
        alt="heart"
      />
    </div>
  );
};

export default RecipeListItem;