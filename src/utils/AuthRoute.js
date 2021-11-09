/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { AuthContext } from '../context/auth'

export const AuthRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext)

  const render = props => {
    if (user && rest.restricted) {
      return <Redirect to='/dashboard' />
    }
    return <Component {...props} />
  }
  return <Route {...rest} render={render} />
}

AuthRoute.protoTypes = {
  component: PropTypes.node,
  Component: PropTypes.elementType
}

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext)
  const render = props => {
    if (!user) {
      return <Redirect to='/login' />
    }
    return <Component {...props} />
  }
  return <Route {...rest} render={render} />
}
PrivateRoute.protoTypes = {
  component: PropTypes.elementType,
  Component: PropTypes.elementType
}
