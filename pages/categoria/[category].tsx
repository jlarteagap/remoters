import React from 'react'
import Sidebar from '@components/sidebar/Sidebar'
import Categories from '@components/jobs/Categories'

import { useRouter } from 'next/router'
import Seo from '@components/seo/seo'

const CategoriesList = () => {
  const router = useRouter()
  const path: any = router.query.category
  return (
    <>
      <Seo
        title={path.replace('_', ' ')}
        description={`Encuentra y postula a trabajos como ${path.replace(
          '_',
          ' '
        )}`}
      />
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
