import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Recipe1 extends Component {
    render() {
      return (
          <div className='signUpContainer'>
              <div className='signUpTitle'>
                  <p>RECIPES</p>
                  <img src='./images/sandwich.png' />
              </div>
              <div className='SignUpForm'>
                  <form>
                      <input
                        type='number'
                        placeholder='Number of calories (1 - 2000)' />
                      <input
                        type='number'
                        placeholder='How healthy you want the food (1 - 10)' />
                                              <input
                        type='text'
                        placeholder='Type atleast two ingredients with commas!' />
                  </form>
              </div>
              <div className='onboardInfo'>
                  <Link to='/recipeconfirm'><button>Calculate</button></Link>
              </div>
          </div>
      )
    }
  }
  
  export default Recipe1;