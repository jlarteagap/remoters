import React from 'react'
import JobsList from '../src/component/jobs/JobsList'
// import Sidebar from '../src/component/sidebar/Sidebar'
const Home = () => {
  return (
    <div className="home">
      <div className="home__jobs">
        <JobsList />
      </div>
      <div className="home__sidebar">{/* <Sidebar /> */}sidebar</div>
    </div>
  )
}

export default Home
