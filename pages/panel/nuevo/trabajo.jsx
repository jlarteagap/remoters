import React from 'react'
import AddJobs from '@components/add/AddJobs.js'
import Seo from '@components/seo/Seo'
import withAuth from '@hoc/withAuth'
const trabajo = () => {
  return (
    <>
      <Seo title="Agregar nuevo trabajo" />
      <AddJobs />
    </>
  )
}

export default withAuth(trabajo)
