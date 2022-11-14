import React, { useContext } from 'react'
import { AuthContext } from '@context/auth'
import Login from '@components/login/Login'

const withAuth = Component => {
  const Auth = props => {
    const { user } = useContext(AuthContext)
    if (!user) {
      return <Login />
    }

    return <Component {...props} />
  }
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps
  }
  return Auth
}

export default withAuth
