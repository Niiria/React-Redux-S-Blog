import { LOGIN, LOGOUT, ADD_FAVOURITE, REMOVE_FAVOURITE } from '../actions/types'

const initialState = {
  account: null,
  favouritesId: [],
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        account: action.payload
      };

    case ADD_FAVOURITE:
      return {
        ...state,
        favouritesId: [...state.favouritesId, action.payload]
      };

    case REMOVE_FAVOURITE:
      return {
        ...state,
        favouritesId: state.favouritesId.filter((fav) => fav !== action.payload)
      };

    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}


export default accountReducer;