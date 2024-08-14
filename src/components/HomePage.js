import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; 
import HeroSection from './HeroSection'; 
import Footer from './Footer';
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
      <Navbar /> 
      <HeroSection />
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
      <Footer /> 
    </div>
  );
};

export default HomePage;













// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
// import HeroSection from './HeroSection';
// import './HomePage.css';
// import Footer from './/Footer';

// const HomePage = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [filteredRecipes, setFilteredRecipes] = useState([]);

//   useEffect(() => {
//     axios
//       .get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
//       .then((response) => {
//         setRecipes(response.data.meals.slice(0, 10));
//         setFilteredRecipes(response.data.meals.slice(0, 10));
//       })
//       .catch((error) => {
//         console.error('Error fetching recipes:', error);
//       });
//   }, []);

//   const handleSearch = (query) => {
//     const results = recipes.filter((recipe) =>
//       recipe.strMeal.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredRecipes(results);
//   };

//   return (
//     <div>
//       <Navbar />
//       <HeroSection onSearch={handleSearch} />
//       <div className="home-container">
//         <h2>Recipes</h2>
//         <div className="recipe-list">
//           {filteredRecipes.map((recipe) => (
//             <Link to={`/recipe/${recipe.idMeal}`} key={recipe.idMeal}>
//               <div className="recipe-card">
//                 <img src={recipe.strMealThumb} alt={recipe.strMeal} />
//                 <h3>{recipe.strMeal}</h3>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;




















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './HomePage.css';

// const HomePage = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     axios
//       .get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
//       .then((response) => {
//         setRecipes(response.data.meals.slice(0, 10)); 
//       })
//       .catch((error) => {
//         console.error('Error fetching recipes:', error);
//       });
//   }, []);

//   return (
//     <div className="home-container">
//       <h2>Recipes</h2>
//       <div className="recipe-list">
//         {recipes.map((recipe) => (
//           <Link to={`/recipe/${recipe.idMeal}`} key={recipe.idMeal}>
//             <div className="recipe-card">
//               <img src={recipe.strMealThumb} alt={recipe.strMeal} />
//               <h3>{recipe.strMeal}</h3>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
