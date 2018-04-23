import React, { Component } from 'react';

class Review extends Component {
  handleDeleteReview = (e) => {
    this.props.store.dispatch({
      type: "DELETE_REVIEW",
      id: this.props.review.id
    })
  }

  render() {

    return (
      <li>
        {this.props.review.text}
        <button type='button' onClick={this.handleDeleteReview}/>
      </li>
    );
  }
};

export default Review;
