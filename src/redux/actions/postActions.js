import { FETCH_POSTS, FETCH_POST_DETAILS, ADD_COMMENT, CHECK_FAVOURITE, GET_FAVOURITES } from './types';

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
}

export const getFavourites = (favouritesId) => async dispatch => {
  let tempFavourites = [];
  tempFavourites = await Promise.all(favouritesId.map(async favouriteId => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${favouriteId}`)
      .then(res => res.json())
  }));
  dispatch({
    type: GET_FAVOURITES,
    payload: tempFavourites
  })

}

export const fetchPostDetails = (postId, favourites) => async dispatch => {
  const post = { body: {}, comments: [], isFavourite: false };
  await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(posts =>
      post.body = posts
    );
  await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(res => res.json())
    .then(posts =>
      post.comments = posts
    );

  post.isFavourite = (favourites.includes(Number(postId)))

  dispatch({
    type: FETCH_POST_DETAILS,
    payload: post
  })
}

export const checkFavourite = (isFavourite) => (dispatch) => {
  dispatch({
    type: CHECK_FAVOURITE,
    payload: isFavourite
  })
}

export const addComment = (postId, email, name) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    body: JSON.stringify({
      postId: postId,
      email: email,
      name: name,
      body: "Empty"
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then(post => {
      dispatch({
        type: ADD_COMMENT,
        payload: post
      });
    });
};