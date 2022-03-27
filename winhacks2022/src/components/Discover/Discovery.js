import React, { Component } from 'react';


export class Discovery extends Component {
    render() {
      return (
          <div className='signUpContainer'>
              <div className='signUpTitle'>
                  <p>DISCOVER</p>
              </div>
              <div className='SignUpForm'>
                  <form>
                      <label>Enter your city</label>
                      <input
                        type='text'
                        placeholder='Location' />
                  </form>
              </div>
              <div className='locationHolder'>
                  <img src='./images/orangearrow.png'/>
                  <p>Use current location</p>
              </div>
          </div>
      )
    }
  }
  
  export default Discovery;