import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from './Navbar';
import '../Stylesheets/Recipe.css';

const Recipe = ({ isAuthenticated, setAuth }) => {
  const [recipe, setRecipe] = useState();
  let { recipeId } = useParams();
  
  const getRecipe = async () => {
    await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.REACT_APP_SPOON_KEY}`, { method: 'GET' })
      .then(response => response.json())
      .then(response => setRecipe(response))
  }

  useEffect(() => {
    getRecipe();
  }, [])

  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} setAuth={setAuth} />
      {recipe ? (
          <div className="recipe-wrapper">
            <h1 className="title">{recipe.title}</h1>
            <img src={recipe.image} />
            
            <div className="prep-info">
              <h3>Preparation Information</h3>
              <div className="info">
                <span>Preparation Minutes: <p>{recipe.preparationMinutes}</p></span>
                <span>Cooking Minutes: <p>{recipe.cookingMinutes}</p></span>
              </div>
            </div>

            <div className="ingredients-info">
              <h3>Ingredients</h3>
              {
                recipe.extendedIngredients.map(ingredient => <p>{ingredient.original}</p>)
              }
            </div>

            <hr className="recipe-divider" />

            <div className="recipe-instructions-wrapper">
              <h3 className="instructions-title">Instructions</h3>
              {
                recipe.instructions ? 
                  (
                    <ol>
                      {recipe.analyzedInstructions[0].steps.map((steps, idx) => <li>{steps.step}</li>)}
                    </ol>
                  )
                : 
                <p>
                  No instructions were found, but we found the source for the recipe  
                  <a id="lost-instructions" href={recipe.sourceUrl}>here</a>
                </p>
              }
            </div>
          </div>
        )
        : null
      }
    </div>
  )
}

export default Recipe;