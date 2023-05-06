import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom';
import { fetchRecipe } from '../redux/recipe/recipeSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Recipe = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const { recipe, status, error } = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(fetchRecipe(id));
  }, [dispatch, id]);

  if (status === 'loading' || recipe === null) {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  if (!recipe) {
    return null;
  }

  return (
    <div className="card rounded-5 text-center p-2 m-4">
      <NavLink to="/" className="fas fa-arrow-left">{'<<Back'}</NavLink>
      <div className="card-body">
        <img className="card-img-top rounded-5" src={recipe.strMealThumb} alt={recipe.strMeal} />
        <h2 className="card-title">{recipe.strMeal}</h2>
        <p className="card-text text-center">{recipe.strInstructions}</p>
        <h3>Ingredients:</h3>
        <ul>
          {recipe.strIngredient1 && (
          <li>
            {recipe.strIngredient1}
            {' '}
            -
            {' '}
            {recipe.strMeasure1}
          </li>
          )}
          {recipe.strIngredient2 && (
          <li>
            {recipe.strIngredient2}
            {' '}
            -
            {' '}
            {recipe.strMeasure2}
          </li>
          )}
          {recipe.strIngredient3 && (
          <li>
            {recipe.strIngredient3}
            {' '}
            -
            {' '}
            {recipe.strMeasure3}
          </li>
          )}
          {recipe.strIngredient4 && (
          <li>
            {recipe.strIngredient4}
            {' '}
            -
            {' '}
            {recipe.strMeasure4}
          </li>
          )}
          {recipe.strIngredient5 && (
          <li>
            {recipe.strIngredient5}
            {' '}
            -
            {' '}
            {recipe.strMeasure5}
          </li>
          )}
          {recipe.strIngredient6 && (
          <li>
            {recipe.strIngredient6}
            {' '}
            -
            {' '}
            {recipe.strMeasure6}
          </li>
          )}
          {recipe.strIngredient7 && (
          <li>
            {recipe.strIngredient7}
            {' '}
            -
            {' '}
            {recipe.strMeasure7}
          </li>
          )}
          {recipe.strIngredient8 && (
          <li>
            {recipe.strIngredient8}
            {' '}
            -
            {' '}
            {recipe.strMeasure8}
          </li>
          )}
          {recipe.strIngredient9 && (
          <li>
            {recipe.strIngredient9}
            {' '}
            -
            {' '}
            {recipe.strMeasure9}
          </li>
          )}
          {recipe.strIngredient10 && (
          <li>
            {recipe.strIngredient10}
            {' '}
            -
            {' '}
            {recipe.strMeasure10}
          </li>
          )}
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Recipe;
