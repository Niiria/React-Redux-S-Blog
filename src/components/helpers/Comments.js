/* eslint-disable react-hooks/exhaustive-deps */
import styles from '../../styles/Comments.module.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postActionCreators } from '../../redux/actionCreators'

export default function Comments({ postId, comments, accountName }) {
  const [comment, setComment] = useState("")

  const dispatch = useDispatch()
  const { addComment } = bindActionCreators(postActionCreators, dispatch)

  const handleChange = (e) => {
    setComment(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    comment.length > 0 &&
      addComment(postId, accountName, comment)

    window.scrollTo(0, document.body.scrollHeight)
    setComment("");
  }

  const COMMENTS_FORM = (accountName ?
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.form_label} htmlFor="comments_form-input-id">Add new comment  <span className="iconify" data-icon="ant-design:user-outlined" data-inline="false"></span>{accountName}:</label>
      <input autoComplete="off" className={styles.form_input} type="text" id="comments_form-input-id" onChange={handleChange} value={comment}></input>
    </form>
    :
    <p className={styles.error}>You need to be logged before you can put any comments</p>
  )


  return (
    <>
      <ul className={styles.main}>
        {comments.map((comment, i) => {
          return (
            //Key should be comment.id 
            <li key={i}>
              <h3>
                <span className="iconify" data-icon="ant-design:user-outlined" data-inline="false"></span>{comment.email}:
              </h3>
              <p> - {comment.name}</p>
            </li>
          )
        })}
      </ul>
      {COMMENTS_FORM}
    </>
  )
}
