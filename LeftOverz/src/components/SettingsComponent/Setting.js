import React, { Component } from 'react';

export class Setting extends Component {
    render() {
      return (
          <div className='signUpContainer'>
              <div className='signUpTitle'>
                  <p>ACCOUNT</p>
              </div>
              <div className='settingsList'>
                  <div className='settingInfo'>
                      <p className='orange'>Name</p>
                      <p>Eric Choi</p>
                  </div>
                  <div className='settingInfo'>
                      <p className='orange'>Email</p>
                      <p>sausageeggers@gmail.com</p>
                  </div>
                  <div className='settingInfo'>
                      <p className='orange'>Phone Number</p>
                      <p>123-456-7891</p>
                  </div>
                  <div className='settingInfo'>
                      <p className='orange'>Password</p>
                      <p>**********</p> 
                  </div>
              </div>
              <div className='onboardInfo'>
                  <button>Logout</button>
              </div>
          </div>
      )
    }
  }
  
  export default Setting;