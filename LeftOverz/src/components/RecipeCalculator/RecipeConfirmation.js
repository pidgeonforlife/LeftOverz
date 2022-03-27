import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class RecipeConfirmation extends Component {
    render() {
      return (
          <div className='signUpContainer'>
              <div className='signUpTitle'>
                  <p>RECIPES</p>
                  <img src='./images/sandwich.png' />
              </div>
              <div className='imageYAH'>
                  <img src='./images/strawberrypie.png' />
              </div>
              <div className='onboardInfo'>
                  <Link to='/home'><button>Return Home</button></Link>
              </div>
          </div>
      )
    }
  }
  
  export default RecipeConfirmation;