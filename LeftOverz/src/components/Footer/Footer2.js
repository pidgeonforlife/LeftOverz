import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'


export class Footer2 extends Component {
    render() {
      return (
          <div className='Footer'>
              <Link to='/home'><button><img src='./images/location.png' /></button></Link>
              <Link to='/recipe'><button><img src='./images/orangeIngredients.png' /></button></Link>
              <Link to='/order'><button><img src='./images/icon2.png' /></button></Link>
              <Link to='/settings'><button><img src='./images/settings.png' /></button></Link>
          </div>
      )
    }
  }
  
  export default Footer2;