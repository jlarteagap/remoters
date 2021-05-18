import { Fragment } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'


const Layout = (props) => (
        <Fragment>
            <Header reset = {props.reset} title="nEmpleos" />
            <Hero />
                {props.children}
            <Footer />
        </Fragment>
)

export default Layout