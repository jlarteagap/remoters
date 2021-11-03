import React, { Fragment, useContext} from 'react'
import { Helmet } from 'react-helmet'
import JobsList from '../component/jobs/JobsList'
import Sidebar from '../component/sidebar/Sidebar'
import AppContext from '../context/AppContext'


const Home = () => {
    const { resetState } = useContext(AppContext)
    return(
        <Fragment> 
            <Helmet>
                <meta charSet="utf-8" />
                <title>Trabajos en Bolivia en tecnología | nempleos</title>
                <meta name="description" content="Encuentra las mejores ofertas laborales en tecnología en Bolivia"/>
                <meta name="author" content="Jorge Luis Arteaga" />
                <meta name="copyright" content="Jorge Luis Arteaga" />
                <meta name="robots" content="index"/>

                <meta name="twitter:card" value="summary" />
                <meta property="og:title" content="Trabajos en Bolivia en tecnología" />
                <meta property="og:type" content="”article" />
                <meta property="og:url" content="" />
                <meta property="og:image" content="" />
            </Helmet>
            <div className="home">
                <div className="home__jobs">
                    <JobsList />
                </div>
                <div className="home__sidebar">
                    <Sidebar reset = {resetState} />
                </div>
            </div>
        </Fragment>
    )}

export default Home