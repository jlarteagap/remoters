import React, { useContext, useEffect } from 'react'
import { AuthContext } from '@context/auth'
import { useRouter } from 'next/router'

const withAuth = Component => {
  const Auth = props => {
    const router = useRouter()
    const { user } = useContext(AuthContext)
    useEffect(() => {
      if (user.email === '') return router.push('/login')
    }, [])

    return <Component {...props} />
  }

  return Auth
}

export default withAuth
