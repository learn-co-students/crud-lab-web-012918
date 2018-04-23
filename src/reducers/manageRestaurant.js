
import cuid from 'cuid';
export const cuidFn = cuid;

let id = 0
let reviewId = 0

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch(action.type){
    case("ADD_RESTAURANT"):
      id++
      let restaurant = Object.assign({}, action.restaurant, {id: id})

      return {...state, restaurants: [...state.restaurants, restaurant]}
    case("DELETE_RESTAURANT"):
      let filteredRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return {...state, restaurants: filteredRestaurants}
    case("ADD_REVIEW"):
      reviewId++
      let review = {text: action.text, id: reviewId, restaurantId: action.restaurantId}
      return {...state, reviews: [...state.reviews, review]}
    case("DELETE_REVIEW"):
      let fileredReviews = state.reviews.filter(review => review.id != action.id)
      return {...state, reviews: fileredReviews}
    default:
      return state
  }
}
