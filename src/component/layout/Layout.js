import React from 'react'
import { Fragment } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'


const Layout = (props) => (
        <Fragment>
            <Header reset = {props.reset} title="nEmpleos..." />
                {props.children}
            <Footer />
        </Fragment>
)

export default Layout