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
    <div className="text-center text-white p-0 em-0">
      <NavLink to="/" className="btn ">{'<<'}</NavLink>
      <div className="container p-1">
        <div className="d-inline-flex justify-content-between">
          <img className="card-img-bottom w-25" src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h2 className="card-title text-end">{recipe.strMeal}</h2>
        </div>
        <table className="table table-striped text-white p-0">
          <thead>
            <th scope="row">INGREDIENTS</th>
          </thead>

          <tr>
            <td>
              {recipe.strIngredient1 && (
                <li>
                  {recipe.strIngredient1}
                  {' '}
                  -
                  {' '}
                  {recipe.strMeasure1}
                </li>
              )}
            </td>
          </tr>
          <tr>
            <td>
              {recipe.strIngredient2 && (
                <li>
                  {recipe.strIngredient2}
                  {' '}
                  -
                  {' '}
                  {recipe.strMeasure2}
                </li>
              )}
            </td>
          </tr>
          <tr>
            <td>
              {recipe.strIngredient3 && (
                <li>
                  {recipe.strIngredient3}
                  {' '}
                  -
                  {' '}
                  {recipe.strMeasure3}
                </li>
              )}
            </td>
          </tr>
          <tr>
            <td>
              {recipe.strIngredient4 && (
                <li>
                  {recipe.strIngredient4}
                  {' '}
                  -
                  {' '}
                  {recipe.strMeasure4}
                </li>
              )}
            </td>
          </tr>
          <tr>
            <td>
              {recipe.strIngredient5 && (
                <li>
                  {recipe.strIngredient5}
                  {' '}
                  -
                  {' '}
                  {recipe.strMeasure5}
                </li>
              )}
            </td>
          </tr>
          <tr>
            <td>
              {recipe.strIngredient6 && (
                <li>
                  {recipe.strIngredient6}
                  {' '}
                  -
                  {' '}
                  {recipe.strMeasure6}
                </li>
              )}
            </td>
          </tr>
          <tr>
            <td>
              {recipe.strIngredient7 && (
                <li>
                  {recipe.strIngredient7}
                  {' '}
                  -
                  {' '}
                  {recipe.strMeasure7}
                </li>
              )}
            </td>
          </tr>
          <tr>
            <td>
              {recipe.strIngredient8 && (
                <li>
                  {recipe.strIngredient8}
                  {' '}
                  -
                  {' '}
                  {recipe.strMeasure8}
                </li>
              )}
            </td>
          </tr>
          <tr>
            <td>
              {recipe.strIngredient9 && (
                <li>
                  {recipe.strIngredient9}
                  {' '}
                  -
                  {' '}
                  {recipe.strMeasure9}
                </li>
              )}
            </td>
          </tr>
          <tr>
            <td>
              {recipe.strIngredient10 && (
                <li>
                  {recipe.strIngredient10}
                  {' '}
                  -
                  {' '}
                  {recipe.strMeasure10}
                </li>
              )}
            </td>
          </tr>
        </table>
        <p className="card-text text-center">{recipe.strInstructions}</p>
        <hr />
      </div>
    </div>
  );
};

export default Recipe;
