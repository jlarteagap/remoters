import Seo from '@components/seo/seo'
import React from 'react'
import Register from '../src/component/login/Register'

const Registro = () => {
  return (
    <>
      <Seo title={'Registro'} />
      <main className="login__content">
        <Register />
      </main>
    </>
  )
}

export default Registro
