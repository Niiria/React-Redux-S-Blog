/* eslint-disable react-hooks/exhaustive-deps */
import styles from '../styles/Details.module.css';
import { ReactComponent as HeartFill } from '../assets/heartFill.svg'
import { ReactComponent as HeartOutline } from '../assets/heartOutline.svg'
import ModalLoader from '../utility/ModalLoader'
import Comments from './helpers/Comments'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { accountActionCreators, postActionCreators } from '../redux/actionCreators';

export default function Details(props) {

  const [commentDropdown, setCommentDropdown] = useState(true)

  const { postDetails } = useSelector((state) => state.post)
  const { account, favouritesId } = useSelector((state) => state.account)

  const dispatch = useDispatch()
  const { fetchPostDetails, checkFavourite } = bindActionCreators(postActionCreators, dispatch)
  const { addFavourite, removeFavourite } = bindActionCreators(accountActionCreators, dispatch)

  useEffect(() => {
    fetchPostDetails(props.match.params.post_id, favouritesId);
    window.scrollTo(0, 0)
    console.log("detail_useEffect")
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  const handleFavouriteAdd = () => {
    addFavourite(postDetails.body.id)
    checkFavourite(true)
  }

  const handleFavouriteRemove = () => {
    removeFavourite(postDetails.body.id)
    checkFavourite(false)
  }

  const handleDropdownClick = (e) => {
    setCommentDropdown(!commentDropdown)
  }






  const FAVOURITES = (postDetails.isFavourite ?
    <button className={styles.favourites_btn} onClick={handleFavouriteRemove}>
      <HeartFill />
    </button>
    :
    <button className={styles.favourites_btn} onClick={handleFavouriteAdd}>
      <HeartOutline />
    </button>
  )


  return (
    <section className={styles.details}>
      {postDetails.comments.length ?
        (<>
          <main className={styles.main}>
            <header className={styles.header}>
              <h1 className={styles.title}>{postDetails.body.title}</h1>
              {account && <>{FAVOURITES}</>}
            </header>
            <img className={styles.img} src="https://picsum.photos/600/400" alt="img"></img>
            <article className={styles.article} >{postDetails.body.body}</article>
          </main>

          <div>
            <button className={styles.comments_btn} onClick={handleDropdownClick}>{postDetails.comments.length} Comments</button>
            {commentDropdown &&
              <Comments postId={postDetails.body.id} accountName={account?.name} comments={postDetails.comments} />
            }
          </div>
        </>)
        :
        (<ModalLoader />)
      }
      <button className={styles.scroll_arrow} onClick={handleScroll}><span className="iconify" data-icon="bi:arrow-up-circle" data-inline="false"></span></button>
    </section>
  )
}
