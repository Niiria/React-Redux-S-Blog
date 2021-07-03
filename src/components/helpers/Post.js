import React from 'react'
import styles from '../../styles/Post.module.css'
import { Link } from 'react-router-dom';


export default function Post({ post }) {

  return (
    <Link to={'/home/' + post.id}>
      <article className={styles.post}>
        <img className={styles.img} src="https://picsum.photos/300/200" alt="img"></img>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.body}>{post.body.split(" ").splice(0, 5).join(" ")}...</p>
      </article>
    </Link>
  )
}
