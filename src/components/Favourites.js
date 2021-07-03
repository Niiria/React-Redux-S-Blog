/* eslint-disable react-hooks/exhaustive-deps */
import styles from '../styles/Favourites.module.css';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postActionCreators } from '../redux/actionCreators'
import Post from './helpers/Post'

export default function Favourites() {
  const { favouritesId } = useSelector((state) => state.account);
  const { favourites } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { getFavourites } = bindActionCreators(postActionCreators, dispatch);

  useEffect(() => {
    getFavourites(favouritesId);
    console.log("fav_useEffect")
  }, []);

  return (
    <section className={styles.favourites}>
      <div className={styles.posts}>
        {favourites.length >= 0 ? (favourites.map((post) => {
          return (
            <Post key={post.id} post={post} />
          );
        }))
          : (<div className="loader"></div>)}
      </div>
      {favourites.length === 0 &&
        <div className={styles.error}>No Favourites in your list</div>
      }
    </section>
  )
}
