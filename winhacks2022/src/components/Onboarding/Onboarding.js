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

              </div>
          </div>
      )
    }
  }
  
  export default Onboarding;