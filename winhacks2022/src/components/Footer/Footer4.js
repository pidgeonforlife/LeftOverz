import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'


export class Footer4 extends Component {
    render() {
      return (
          <div className='Footer'>
              <Link to='/home'><button><img src='./images/location.png' /></button></Link>
              <Link to='/recipe'><button><img src='./images/ingredients.png' /></button></Link>
              <Link to='/order'><button><img src='./images/icon2.png' /></button></Link>
              <Link to='/settings'><button><img src='./images/orangeSettings.png' /></button></Link>
          </div>
      )
    }
  }
  
  export default Footer4;