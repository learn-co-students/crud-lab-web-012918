import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let filteredReviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)
    let mappedReviews = filteredReviews.map((review, index) => <Review key={index} review={review} store={this.props.store}/>)
    return (
      <ul>
        Reviews
        {mappedReviews}
      </ul>
    );
  }
};

export default Reviews;
