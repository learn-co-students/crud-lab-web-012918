import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const mappedRestaurants = this.props.store.getState().restaurants.map( (rest, index) => <Restaurant key={index} restaurant={rest} store={this.props.store} reviews={this.props.store.getState().reviews}/>)
    return(
      <ul>
        Restaurants Component
        {mappedRestaurants}
      </ul>
    );
  }
};

export default Restaurants;
