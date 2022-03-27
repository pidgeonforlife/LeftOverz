import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                  <div className='restrauntList'>
                  <div className='restraunt1'>
                          <div className='restrauntHeader1'>
                              <img className='restrauntCover' src='./images/dominoscover.png' />
                          </div>
                          <div className='restrauntInfo1'>
                              <div className='restrauntInfoTop'>
                                  <Link to='/confirm'><p>Domino's Pizza</p></Link>
                                  <a>10:00 AM - 5:00 PM</a>
                              </div>
                              <div className='restrauntInfoBottom'>
                                  <div className='fix'>
                                  <img src='./images/rating.png' /> <p>3.9 | 10 Miles</p>
                                  </div>
                                  <div className='fix'>
                                  <p className='dollar'>$4.99</p>
                                  </div>
                              </div>
                          </div>
                    </div>
                    <div className='restraunt1'>
                          <div className='restrauntHeader1'>
                              <img className='restrauntCover' src='./images/starbucks.png' />
                          </div>
                          <div className='restrauntInfo1'>
                              <div className='restrauntInfoTop'>
                                  <p>Starbucks</p>
                                  <a>10:00 AM - 5:00 PM</a>
                              </div>
                              <div className='restrauntInfoBottom'>
                                  <div className='fix'>
                                  <img src='./images/rating.png' /> <p>4.9 | 12 Miles</p>
                                  </div>
                                  <div className='fix'>
                                  <p className='dollar'>$4.99</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='restraunt1'>
                          <div className='restrauntHeader1'>
                              <img className='restrauntCover' src='./images/saveonfoods.png' />
                          </div>
                          <div className='restrauntInfo1'>
                              <div className='restrauntInfoTop'>
                                  <p>Grocery Store</p>
                                  <a>10:00 AM - 5:00 PM</a>
                              </div>
                              <div className='restrauntInfoBottom'>
                                  <div className='fix'>
                                  <img src='./images/rating.png' /> <p>3.7 | 13 Miles</p>
                                  </div>
                                  <div className='fix'>
                                  <p className='dollar'>$4.99</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      </div>
              </div>
              <div className='recommended'>
                  <div className='recommendedTitle'>
                      <p>My Favourite's</p> <button>see all <img src='./images/rightarrow.png' /></button>
                  </div>
                  <div className='restrauntList'>
                  <div className='restraunt1'>
                          <div className='restrauntHeader1'>
                              <img className='restrauntCover' src='./images/Hugos.png' />
                          </div>
                          <div className='restrauntInfo1'>
                              <div className='restrauntInfoTop'>
                                  <p>Hugo's Tacos</p>
                                  <a>10:00 AM - 5:00 PM</a>
                              </div>
                              <div className='restrauntInfoBottom'>
                                  <div className='fix'>
                                  <img src='./images/rating.png' /> <p>3.9 | 10 Miles</p>
                                  </div>
                                  <div className='fix'>
                                  <p className='dollar'>$4.99</p>
                                  </div>
                              </div>
                          </div>
                    </div>
                    <div className='restraunt1'>
                          <div className='restrauntHeader1'>
                              <img className='restrauntCover' src='./images/Maki.png' />
                          </div>
                          <div className='restrauntInfo1'>
                              <div className='restrauntInfoTop'>
                                  <p>Maki's Sushi</p>
                                  <a>10:00 AM - 5:00 PM</a>
                              </div>
                              <div className='restrauntInfoBottom'>
                                  <div className='fix'>
                                  <img src='./images/rating.png' /> <p>4.4 | 8 Miles</p>
                                  </div>
                                  <div className='fix'>
                                  <p className='dollar'>$4.99</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='restraunt1'>
                          <div className='restrauntHeader1'>
                              <img className='restrauntCover' src='./images/dominoscover.png' />
                          </div>
                          <div className='restrauntInfo1'>
                              <div className='restrauntInfoTop'>
                                  <p>Domino's Pizza</p>
                                  <a>10:00 AM - 5:00 PM</a>
                              </div>
                              <div className='restrauntInfoBottom'>
                                  <div className='fix'>
                                  <img src='./images/rating.png' /> <p>3.9 | 10 Miles</p>
                                  </div>
                                  <div className='fix'>
                                  <p className='dollar'>$4.99</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      </div>
              </div>
          </div>
      )
    }
  }
  
  export default DiscoverLocal;