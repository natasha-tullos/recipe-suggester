import React, { useState } from 'react';

import Navbar from './Navbar';
import '../Stylesheets/Main.css';

const Main = ({ isAuthenticated, setAuth }) => {
  const [protein, setProtein] = useState();
  const [fats, setFats] = useState();
  const [carbs, setCarbs] = useState();
  const [recipes, setRecipes] = useState();

  const getRecipes = async () => {
    await fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${process.env.REACT_APP_SPOON_KEY}&maxCarbs=${carbs}&maxProtein=${protein}&maxFat=${fats}&number=${12}`,
      {
        method: 'GET'
      })
      .then(response => response.json())
      .then(response => setRecipes(response))

  }

  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} setAuth={setAuth} />
      <div className="macros-container">
        <h3>Enter Your Macros</h3>

        <label htmlFor="protein-input">Protein</label>
        <div className="input-container">
          <input 
            className="protein-input" 
            type="number" 
            onChange={(text) => setProtein(text.target.value)}
          />
          <p className="units">grams</p>
        </div>

        <label htmlFor="fats-input">Fats</label>
        <div className="input-container">
          <input 
            className="fats-input" 
            type="number" 
            onChange={(text) => setFats(text.target.value)}
          />
          <p className="units">grams</p>
        </div>

        <label htmlFor="carbs-input">Carbohydrates</label>
        <div className="input-container">
          <input 
            className="carbs-input" 
            type="number" 
            onChange={(text) => setCarbs(text.target.value)}
          />
          <p className="units">grams</p>
        </div>

          <button className="recipe-btn" onClick={() => getRecipes()}>Find Recipes</button>     
      </div>
      <hr className="recipe-divider" />
    
      <div className="recipe-container">
        {recipes ? 
          recipes.map((recipe, idx) => (
            <div className="recipe-image-wrapper">
              <div className="col">
                <a href={`/recipe/${recipe.id}`}>
                  <img className="recipe-image" key={idx} src={recipe.image} />
                </a>
                <div className="recipe-text">
                  <p className="recipe-title">{recipe.title}</p>
                  <div className="nutrition-facts">
                    <span className="protein-facts">Protein: <p>{recipe.protein}</p></span>
                    <span className="fats-facts">Fats: <p>{recipe.fat}</p></span>
                    <span className="carbs-facts">Carbs: <p>{recipe.carbs}</p></span>
                  </div>
                </div>
              </div>
            </div>
          ))
          : null
        }
      </div>

    </div>
  )
}

export default Main;