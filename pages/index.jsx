import React from 'react'
import Hero from '../src/component/hero/Hero'
import JobsList from '../src/component/jobs/JobsList'
import Sidebar from '../src/component/sidebar/Sidebar'
import Seo from '@components/seo/seo'

const Home = ({ title, description, web }) => {
  return (
    <>
      <Seo></Seo>
      <Hero />
      <div className="home">
        <div className="home__jobs">
          <JobsList />
        </div>
        <div className="home__sidebar">
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default Home
