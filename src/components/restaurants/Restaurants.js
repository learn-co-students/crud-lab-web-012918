import React, { Component } from 'react';
import Restaurant from './Restaurant'
class Restaurants extends Component {
  // allRestaurants = () => {
  //   return this.props.store.getState().restaurants.map(restaurant => {
  //     return <li>yo</li>
  //   })
  // }

  render() {
    let restaurants = this.props.store.getState().restaurants.map(restaurant => {
      return <Restaurant key={restaurant.id} restaurant={restaurant} store={this.props.store}/>
    })
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
