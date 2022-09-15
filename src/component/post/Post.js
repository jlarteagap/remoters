import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom/'
import './post.css'
import { useQuery } from '@apollo/client'
import { GET_JOB } from '../../Graphql/Query'
import Loading from '../../utils/Loading'
import { PostDetails } from './PostDetails'

const Post = props => {
  const { id } = props.match.params
  const { loading, error, data } = useQuery(GET_JOB, {
    variables: {
      id
    }
  })
  if (loading) return <Loading />
  if (error) return `Error: ${error.message}`

  console.log(data)
  return (
    <div className="container post">
      <PostDetails post={data.getJob} />
    </div>
  )
}

export default withRouter(Post)

Post.propTypes = {
  props: PropTypes.object,
  match: PropTypes.string
}
