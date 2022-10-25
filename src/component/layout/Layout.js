import React, { Fragment } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import PropTypes from 'prop-types'

const Layout = ({ children }) => (
  <Fragment>
    <Header title="RECLUTOP" />
    <main className="main">
      <div className="container">{children}</div>
    </main>
    <Footer />
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node
}
export default Layout
