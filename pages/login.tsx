import Seo from '@components/seo/seo'
import React from 'react'
import Login from '../src/component/login/Login'

const LoginView = () => {
  return (
    <>
      <Seo title={'Ingreso'} />
      <main className="login__content">
        <Login></Login>
      </main>
    </>
  )
}

export default LoginView
