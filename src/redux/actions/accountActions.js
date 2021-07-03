import { LOGIN, LOGOUT, ADD_FAVOURITE, REMOVE_FAVOURITE } from './types';

export const login = (username) => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
    .then(res => res.json())
    .then(users =>
      dispatch({
        type: LOGIN,
        payload: users[0]
      })
    );
}

export const addFavourite = (postId) => dispatch => {
  dispatch({
    type: ADD_FAVOURITE,
    payload: postId
  })
}

export const removeFavourite = (postId) => dispatch => {
  dispatch({
    type: REMOVE_FAVOURITE,
    payload: postId
  })
}


export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT,
    payload: null
  })
}