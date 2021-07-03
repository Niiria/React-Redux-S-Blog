/* eslint-disable react-hooks/exhaustive-deps */
import styles from '../styles/Home.module.css';
import React, { useEffect } from 'react'
import ModalLoader from '../utility/ModalLoader'
import Post from './helpers/Post'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postActionCreators } from '../redux/actionCreators'



export default function Home() {
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { fetchPosts } = bindActionCreators(postActionCreators, dispatch);

  useEffect(() => {
    fetchPosts();
    console.log("home_useEffect")
  }, []);


  return (
    <section className={styles.home}>
      <div className={styles.posts}>
        {posts.length ? (posts.map((post) => {
          return (
            <Post key={post.id} post={post} />
          );
        })) : (<ModalLoader />)}
      </div>
    </section>
  )
}
