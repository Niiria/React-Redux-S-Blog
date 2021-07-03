import styles from '../styles/Nav.module.css';
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { accountActionCreators } from '../redux/actionCreators';



export default function Details() {
  const history = useHistory();
  const { account } = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { logout } = bindActionCreators(accountActionCreators, dispatch);

  const handleLogout = () => {
    logout();
    history.push("/")
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <p>S-Blog</p>
        <span className={`${styles.logo_ico} + iconify`} data-icon="ion:newspaper-outline" data-inline="false"></span>
      </div>
      <div className={styles.links}>
        {account ?
          <div className={styles.links}>
            <NavLink exact to="/home">Home</NavLink>
            <NavLink exact to="/favourites">favourites</NavLink>
            <p className={styles.links_hello}>Hello {account.name}!</p>
            <button className={styles.btn_logout} onClick={handleLogout}>Logout</button>
          </div>
          :
          <div className={styles.links}>
            <NavLink exact to="/home">Home</NavLink>
            <NavLink exact to="/">Login</NavLink>
          </div>
        }
      </div>
    </nav>
  )
}
