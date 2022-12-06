import React from 'react'
import Sidebar from '@components/sidebar/Sidebar'
import Categories from '@components/jobs/Categories'

import { useRouter } from 'next/router'

const CategoriesList = () => {
  const router = useRouter()

  return (
    <>
      <div className="home">
        <div className="home__jobs">
          <Categories category={router.query.category} />
        </div>
        <div className="home__sidebar">
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default CategoriesList
