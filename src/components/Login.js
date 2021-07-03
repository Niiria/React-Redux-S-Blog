import styles from '../styles/Login.module.css';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { accountActionCreators } from '../redux/actionCreators';

export default function Details() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const { account } = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { login } = bindActionCreators(accountActionCreators, dispatch);

  const handleChange = (e) => {
    setUsername(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
  }

  useEffect(() => {
    console.log("login_useEffect")
    if (account)
      history.push("/home")
  }, [account, history])

  return (
    <section className={styles.background}>
      <div className={styles.login}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="userLogin">Input your username</label>
          <input value={username} id="userLogin" className={styles.form_input} type="text" onChange={(e) => handleChange(e)}></input>
          <button className={styles.form_btn} >Login!</button>
        </form>
      </div>
      <div className={styles.helpers}>
        <h2>Our happy users!</h2>
        {/* Login purposes only */}
        <ul>
          <li onClick={() => { setUsername("Bret") }}>Bret</li>
          <li onClick={() => { setUsername("Samantha") }}>Samantha</li>
          <li onClick={() => { setUsername("Karianne") }}>Karianne</li>
          <li onClick={() => { setUsername("Kamren") }}>Kamren</li>
          <li onClick={() => { setUsername("Delphine") }}>Delphine</li>
        </ul>
      </div>
    </section>
  )
}
