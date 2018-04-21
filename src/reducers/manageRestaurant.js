
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch(action.type) {
    case "ADD_RESTAURANT":
      return {...state, restaurants: [...state.restaurants, {
        ...action.text,
        id: cuidFn(),
        reviews: []
      }]
    }
    case "DELETE_RESTAURANT":
      const restaurants = state.restaurants.filter(rest => rest.id !== action.id)
      return {...state, restaurants: restaurants}
    case "ADD_REVIEW":
      return {...state, reviews: [...state.reviews, {
        id: cuidFn(),
        text: action.payload.text,
        restaurantId: action.payload.restaurantId
      }]}
    case "DELETE_REVIEW":
      const reviews = state.reviews.filter(review => review.id !== action.id)
      return {...state, reviews: reviews}
    default:
      return state
  }
}
