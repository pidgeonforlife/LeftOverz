import React, { Component } from 'react';

export class Orders extends Component {
    render() {
      return (
          <div className='signUpContainer'>
              <div className='signUpTitle' id='moveThis'>
                  <p>ORDERS</p>
              </div>
              <div className='signUpDescription' id='moveLeft'>
                  <a>In Progress</a>
              </div>
              <div className='settingsList'>
                  <div className='settingInfo'>
                      <img src='./images/dominos.png' />
                      <p>Domino's Pizza</p>
                  </div>
              </div>
              <div className='signUpDescription' id='moveUp'>
                  <a>Completed (3)</a>
              </div>
              <div className='settingsList'>
                  <div className='settingInfo'>
                    <img src='./images/makilogo.png' />
                      <p>Maki Sushi Bar</p>
                  </div>
                  <div className='settingInfo'>
                    <img src='./images/hugoslogo.png' />
                      <p>Hugo's Restraunt</p>
                  </div>
                  <div className='settingInfo'>
                    <img src='./images/brodylogo.png' />
                      <p>Brody's Breakfast Bistro</p>
                  </div>
              </div>
          </div>
      )
    }
  }
  
  export default Orders;