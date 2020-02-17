import React from 'react';

import Navbar from './Navbar';
import '../Stylesheets/Main.css';

const Main = ({ isAuthenticated, setAuth }) => {
  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} setAuth={setAuth} />
      <p>Successfully authed, in private page now</p>

      <div className="macros-container">
        <h3>Enter Your Macros</h3>

        <form>
          <label htmlFor="protein-input">Protein</label>
          <div className="input-container">
            <input className="protein-input" type="number" />
            <p className="units">grams</p>
          </div>

          <label htmlFor="fats-input">Fats</label>
          <div className="input-container">
            <input className="fats-input" type="number" />
            <p className="units">grams</p>
          </div>

          <label htmlFor="carbs-input">Carbohydrates</label>
          <div className="input-container">
            <input className="carbs-input" type="number" />
            <p className="units">grams</p>
          </div>

          <button className="recipe-btn">Find Recipes</button>
        </form>        
      </div>

    </div>
  )
}

export default Main;