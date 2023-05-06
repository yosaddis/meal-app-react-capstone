import { configureStore } from '@reduxjs/toolkit';
import dishesReducer from './dishes/dishesSlice';
import recipeReducer from './recipe/recipeSlice';

const store = configureStore({
  reducer: {
    dishes: dishesReducer,
    recipe: recipeReducer,
  },
});

export default store;
