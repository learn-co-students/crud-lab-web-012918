import React, { Component } from 'react';
import ReviewInput from "../reviews/ReviewInput"

class Restaurant extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: "DELETE_RESTAURANT",
      id: this.props.restaurant
    })
  }

  render() {
    const { text, id } = this.props.restaurant;
    return (
      <div>
        <li>
          {text}
          <button onClick={() => this.handleOnClick()}/>
          <ReviewInput
            store={this.props.store}
            restaurantID={id} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
