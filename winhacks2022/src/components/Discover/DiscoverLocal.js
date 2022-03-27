import React, { Component } from 'react';
import HorizontalScroll from 'react-scroll-horizontal'
import './Discover.css';

export class DiscoverLocal extends Component {
    render() {
      return (
          <div className='signUpContainer'>
              <div className='discoverTitle'>
                  <p className='move'>DISCOVER</p>
                  <button className='doThis'> <img src='./images/loco.png' /> Vancouver, BC</button>
              </div>
              <div className='DiscoverFoods'>
                  <button><img src='./images/hamburger.png' /> Fast Food</button>
                  <button><img src='./images/burrito.png' /> Mexican</button>
                  <button><img src='./images/pizza.png' /> Pizza</button>
                  <button><img src='./images/sushi.png' /> Sushi</button>
                  <button><img src='./images/salad.png' /> Vegan</button>
                  <button><img src='./images/drinks.png' /> Drinks</button>
              </div>
              <div className='recommended'>
                  <div className='recommendedTitle'>
                      <p>Recommended</p> <button>see all <img src='./images/rightarrow.png' /></button>
                  </div>
              </div>
              <div className='recommended'>
                  <div className='recommendedTitle'>
                      <p>Recommended</p> <button>see all <img src='./images/rightarrow.png' /></button>
                  </div>
              </div>
              <div className='recommended'>
                  <div className='recommendedTitle'>
                      <p>Recommended</p> <button>see all <img src='./images/rightarrow.png' /></button>
                  </div>
              </div>
          </div>
      )
    }
  }
  
  export default DiscoverLocal;