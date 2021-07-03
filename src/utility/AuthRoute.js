import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function AuthRouter({ component: Component, ...rest }) {

  const { account } = useSelector((state) => state.account);
  return (
    <Route
      {...rest}
      render={(props) =>
        account ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}
