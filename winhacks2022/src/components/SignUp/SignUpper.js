import React, { Component } from 'react';
import './SignUpper.css'


export class SignUpper extends Component {
    render() {
      return (
          <div className='signUpContainer'>
              <div className='signUpTitle'>
                  <p>SIGN UP</p>
                  <img src='./images/OnboardingEgg.png' />
              </div>
              <div className='signUpDescription'>
                  <a>Already a member? Login</a>
              </div>
              <div className='SignUpForm'>
                  <form>
                      <input
                        type='text'
                        placeholder='Name' />
                      <input
                        type='text'
                        placeholder='Phone Number' />
                      <input
                        type='text'
                        placeholder='Email' />
                      <input
                        type='text'
                        placeholder='Password' />
                      <input
                        type='text'
                        placeholder='Re-enter Password' />
                  </form>
              </div>
              <div className='onboardInfo'>
                  <button>Sign Up</button>
              </div>
          </div>
      )
    }
  }
  
  export default SignUpper;