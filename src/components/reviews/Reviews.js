import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { store, restaurantId } = this.props
    const associatedReviews = store.getState().reviews.filter(review => review.restaurantId === restaurantID);
    const reviews = associatedReviews.map((review, index) => {
      <Review key={index} store={store} review={review} />
    })
    return (
      <div>
        <ul>
          {reviews}
        </ul>
      </div>
    );
  }
};

export default Reviews;
