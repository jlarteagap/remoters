import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom/'
import './post.css'
import { useQuery } from '@apollo/client'
import { GET_POST } from '../../Graphql/Query'
import Loading from '../../utils/Loading'
import { PostDetails } from './PostDetails'

const Post = props => {
  const { slug } = props.match.params
  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
      slug
    }
  })
  if (loading) return <Loading />
  if (error) return `Error: ${error.message}`

  return (
    <div className="container post">
      <PostDetails post={data.getPost} />
    </div>
  )
}

export default withRouter(Post)

Post.propTypes = {
  props: PropTypes.object,
  match: PropTypes.object
}
