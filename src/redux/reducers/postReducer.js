import { FETCH_POSTS, GET_FAVOURITES, FETCH_POST_DETAILS, ADD_COMMENT, CHECK_FAVOURITE } from '../actions/types'

const initialState = {
  posts: [],
  favourites: [],
  postDetails: { body: {}, comments: [], isFavourite: false }
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
        postDetails: { body: {}, comments: [], isFavourite: false }
      };
    case GET_FAVOURITES:
      return {
        ...state,
        favourites: action.payload,
        postDetails: { body: {}, comments: [], isFavourite: false }

      };

    case FETCH_POST_DETAILS:
      return {
        ...state,
        postDetails: action.payload,
      };

    case CHECK_FAVOURITE:
      return {
        ...state,
        postDetails: { ...state.postDetails, isFavourite: action.payload },
      };

    case ADD_COMMENT:
      return {
        ...state,
        postDetails: { ...state.postDetails, comments: [...state.postDetails.comments, action.payload] },
      };
    default:
      return state;
  }
}

export default postReducer;