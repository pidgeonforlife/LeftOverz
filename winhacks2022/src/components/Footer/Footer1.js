import React, { Component } from 'react';
import './Footer.css'


export class Footer1 extends Component {
    render() {
      return (
          <div className='Footer'>
              <button><img src='./images/orangeLocation.png' /></button>
              <button><img src='./images/ingredients.png' /></button>
              <button><img src='./images/icon2.png' /></button>
              <button><img src='./images/settings.png' /></button>
          </div>
      )
    }
  }
  
  export default Footer1;