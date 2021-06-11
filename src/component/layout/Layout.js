
import React, { Fragment } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = ({reset, children}) => (
        <Fragment>
            <Header reset = {reset} title="nEmpleos" />
                {children}
            <Footer />
        </Fragment>
)

export default Layout