import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ""
  }

  handleChange = e => {
    this.setState({ text: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.store.dispatch({
      type: "ADD_REVIEW",
      payload: {
        restaurantId: this.props.restaurantId,
        text: this.state.text
      }
    })
    this.setState({ text: "" })
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
      </div>
    );
  }
};

export default ReviewInput;
