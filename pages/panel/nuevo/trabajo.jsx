import React from 'react'
import AddJobs from '@components/add/AddJobs.js'

import withAuth from '@hoc/withAuth'
const trabajo = () => {
  return <AddJobs />
}

export default withAuth(trabajo)
