import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from './Navbar';

const Recipe = ({ isAuthenticated, setAuth }) => {
  const [recipe, setRecipe] = useState();
  let { recipeId } = useParams();

  useEffect(async () => {
    await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.REACT_APP_SPOON_KEY}`, { method: 'GET' })
      .then(response => response.json())
      .then(response => setRecipe(response))

      // console.log(recipe, ' recipe')
  }, [])

  console.log(recipe, ' recipe?')
  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} setAuth={setAuth} />
      {/* <h1>{recipe.name}</h1> */}
      {recipe ? (
          <div>
            <h1>{recipe.title}</h1>
            <img src={recipe.image} />
            
            <h3>Preparation Information</h3>
            <div className="prep-info">
              <span>Preparation Minutes: <p>{recipe.preparationMinutes}</p></span>
              <span>Cooking Minutes: <p>{recipe.cookingMinutes}</p></span>
            </div>

            <h3>Ingredients</h3>
            <div className="ingredients-info">
              {
                recipe.extendedIngredients.map(ingredient => <p>{ingredient.original}</p>)
              }
            </div>

            <h3>Instructions</h3>
            <div className="recipe-instructions-wrapper">
              <ol>
                {recipe.analyzedInstructions[0].steps.map((steps, idx) => <li>{steps.step}</li>)}
              </ol>
            </div>
          </div>
        )
        : null
      }
    </div>
  )
}

export default Recipe;