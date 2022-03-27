import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class RestrauntDetails extends Component {
    render() {
      return (
          <div className='orderDetailsContainer'>
              <div className='orderDetailsImage'>
                  <img src='./images/confirmDetails.png' />
              </div>
              <div className='onboardInfo'>
                  <Link to='/order'><button>Confirm Order</button></Link>
              </div>
          </div>
      )
    }
  }
  
  export default RestrauntDetails;