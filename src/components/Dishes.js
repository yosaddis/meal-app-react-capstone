import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { fetchDishes } from '../redux/dishes/dishesSlice';
import { fetchRecipe } from '../redux/recipe/recipeSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

const Dishes = () => {
  const dispatch = useDispatch();
  const { dishes, status, error } = useSelector((state) => state.dishes);
  const [selectedDish, setSelectedDish] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [likes, setLikes] = useState(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likes')) || {};
    return storedLikes;
  });
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  const handleDetailClick = (id) => {
    if (id === selectedDish) {
      return;
    }
    dispatch(fetchRecipe(id));
    setSelectedDish(id);
    navigate(`/recipe?id=${id}`);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLikeClick = (id) => {
    setLikes((prevLikes) => {
      const newLikes = { ...prevLikes };
      newLikes[id] = (newLikes[id] || 0) + 1;
      return newLikes;
    });
  };

  const filteredDishes = dishes.filter((dish) => {
    const dishName = dish.strMeal.toLowerCase();
    const dishLetter = dish.strMeal.charAt(0).toLowerCase();
    const query = searchQuery.toLowerCase();
    return dishName.includes(query) || dishLetter === query;
  });

  if (status === 'loading') {
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

  return (
    <main>
      <div className="input-group rounded p-4">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="row">
        {filteredDishes.map((dish) => (
          <div key={dish.idMeal}>
            <div className="col-sm-5 col-md-6">
              <button type="button" className="btn btn-outline-light btn-rounded" onClick={() => handleDetailClick(dish.idMeal)}>
                <img src={dish.strMealThumb} alt="meal-img" className="rounded-5 img-fluid " />
              </button>
              <div className="container-sm text-center">
                <h5 className="">{dish.strMeal}</h5>
                <FaHeart onClick={() => handleLikeClick(dish.idMeal)} />
                <h5>
                  {likes[dish.idMeal] || 0}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Dishes;
