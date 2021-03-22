import React, { useEffect, useState } from 'react';
import classes from './SingleRecipe.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStopwatch,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import axios from '../../axios/axiosSpoonacular';
import ReactHtmlParser from 'react-html-parser';
import Spinner from '../../components/Spinner/Spinner';
import FavoritesContext from '../components/FavoritesContext/FavoritesContext.js';
import RecipeList from './RecipeList';
import SearchBar from './SearchBar';

const SingleRecipe = props => {
  const { id } = props.match.params;
  const [recipe, setRecipe] = useState({});
  const [loading, setloading] = useState(false);
  const initialState = useContext(FavoritesContext);
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  useEffect(() => {
    setloading(true);
    axios
      .get(`/${id}/information`)
      .then(res => {
        const {
          id,
          summary,
          title,
          readyInMinutes,
          image,
          servings,
        } = res.data;

        setRecipe({
          id,
          summary,
          title,
          readyInMinutes,
          image,
          servings,
        });
        setloading(false);
      })

      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
      {loading ? (
        <Spinner />
      ) : (
        <FavoritesContext.Provider value={{ state, dispatch }}>
      <SearchBar
        changeSearchTermState={e =>
          e.target.value === "" ? setTerm("coding") : setTerm(e.target.value)
        }
        value={term}
      />
      <RecipeList recipes={recipe} />

    </FavoritesContext.Provider></div
        <div className={classes.Center}>
          <button className={classes.Button} onClick={props.history.goBack}>
            Back
          </button>
          <div className={classes.SingleRecipe}>
            <div className={classes.SingleRecipeCenter}>
              <h2>{recipe.title}</h2>
              <hr />
              <div className={classes.Content}>
                <div className={classes.Info}>
                  <div className={classes.InfoBlock}>
                    <span className={classes.InfoBlockIcon}>
                      <FontAwesomeIcon icon={faStopwatch} />
                      <span>{recipe.readyInMinutes}</span>
                    </span>
                    Ready
                  </div>
                  <div className={classes.InfoBlock}>
                    <span className={classes.InfoBlockIcon}>
                      <FontAwesomeIcon icon={faUsers} />
                      <span>{recipe.servings}</span>
                    </span>
                    Servings
                  </div>
                  <div className={classes.favorites}>
                  <button className={classes.Button} onClick={() => {addFavorite()}}>
                    <span className={classes.InfoBlockIcon}>
                      <FontAwesomeIcon icon={faStar} />
                      Add Recipe To Favorites
                      </span>
                      </button>
                    Rating
                  </div>
                </div>
                <p className={classes.Summary}>
                  {ReactHtmlParser(recipe.summary)}
                </p>
                <div className={classes.DishTypes}>
                </div>
                  <span>Lunch</span>
                  <span>Main Course</span>
                  <span>Dinner</span>
                </div>
              </div>
            </div>
          </div>
  
      )}   
  

export dault SingleRecipe