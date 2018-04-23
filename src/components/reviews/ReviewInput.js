import React, { Component } from 'react';
import Reviews from './Reviews';
import Review from './Review'
class ReviewInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: "ADD_REVIEW",
      text: this.state.text,
      restaurantId: this.props.restaurantId
    })
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
      </div>
    );
  }
};

export default ReviewInput;
