import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let filteredReviews = this.props.store.getState().reviews.filter(review => review.restaurantId == this.props.restaurantId)
    console.log(this.props.restaurantId)
    let reviews = filteredReviews.map(review => <Review store={this.props.store} review={review}/>)
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
