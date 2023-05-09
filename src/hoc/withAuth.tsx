import React, { useContext, useEffect } from 'react'
import { AuthContext } from '@context/auth'
import { useRouter } from 'next/router'

const withAuth = Component => {
  const Auth = props => {
    const router = useRouter()
    const { user } = useContext(AuthContext)
    console.log(user)
    useEffect(() => {
      const getUserData = async () => {
        if (user?.email === '') return router.push('/login')
      }

      getUserData()
    }, [])

    return <Component {...props} />
  }

  return Auth
}

export default withAuth
