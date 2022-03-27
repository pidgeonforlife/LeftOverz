import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class RestrauntDetails extends Component {
    render() {
      return (
          <div className='orderDetailsContainer'>
              <div className='orderDetailsImage'>
                  <img src='./images/dominosDetails.png' />
              </div>
              <div className='surpriseBoxInfo'>
                  <div className='surpriseBoxTitle'>
                      <p className='sizeUp'>Surprise Box</p>
                      <p className='dollar'>$4.99</p>
                  </div>
                  <div className='restrauntRating'>
                      <img src='./images/rating.png' />
                      <p>3.9</p> <p className='gray'>( 41 Reviews )</p>
                  </div>
                  <div className='pickUp'>
                      <p>Pick Up: 10:00 AM - 5:00 PM</p>
                  </div>
                  <div className='location'>
                      <img src='./images/loco.png' />
                      <p>1234 Dunbar Street, Vancouver, BC, V6S0G1</p>
                  </div>
                  <hr className='line'></hr>
                  <div className='surpriseBoxDescription'>
                  <p className='changeTitleSize'>WHAT'S IN YOUR SURPRISE BOX?</p>
                  <p className='changeDescriptionSize'>The box might include whole or side portions depending on what is available at the time. 
                      If you have concerns about allergies, make sure to leave a note after reserving your order!</p>
                  </div>
                  <hr className='line'></hr>
                <div className='paymentInformation'>
                  <p>PAYMENT INFORMATION</p>
                  <p>Please pay at the store.</p>
              </div>
              <hr className='line'></hr>
              <div className='instructionsInformation'>
                  <p>INSTRUCTIONS FROM THE RESTRAUNT</p>
                  <p>Please bring your own bag to carry your order. We will package your food, 
                      but not provide a bag to carry it in. </p>
              </div>
              <hr className='line'></hr>
              <div className='ratingYoHo'>
                  <p>SEE WHAT OTHER PEOPLE ARE SAYING</p>
                  <img src='./images/rating.png' />
                  <a>Read More</a>
              </div>
              <hr className='line'></hr>
              <div className='onboardInfo'>
                  <Link to='/discover'><button>Reserve</button></Link>
              </div>
              </div>
          </div>
      )
    }
  }
  
  export default RestrauntDetails;