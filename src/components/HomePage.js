import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => {
        setRecipes(response.data.meals.slice(0, 10)); 
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  }, []);

  return (
    <div className="home-container">
      <h2>Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.idMeal}`} key={recipe.idMeal}>
            <div className="recipe-card">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <h3>{recipe.strMeal}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
