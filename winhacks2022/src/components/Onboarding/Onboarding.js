import React, { Component } from 'react';
import './Onboarding.css'


export class Onboarding extends Component {
    render() {
      return (
          <div className='onboardingContainer'>
              <div className='onboardLogo'>
                  <img src='./images/OnboardingEgg.png' />
              </div>
              <div className='onboardInfo'>
                  <p>SAVE THE PLANET ONE MEAL AT A TIME</p>
                  <button>Get Started</button>
                  <a>Already a member? Login</a>

              </div>
          </div>
      )
    }
  }
  
  export default Onboarding;