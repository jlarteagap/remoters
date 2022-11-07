import React from 'react'
import PropTypes from 'prop-types'

import { useQuery } from '@apollo/client'
import { GetPostDocument } from '@service/graphql/graphql'
import Loading from '@utils/Loading'
import { PostDetails } from './PostDetails'
import PostCSS from '@public/css/Post.module.css'

const Post = ({ slug }): any => {
  const { loading, error, data } = useQuery(GetPostDocument, {
    variables: {
      slug
    }
  })
  if (loading) return <Loading />
  if (error) return `Error: ${error.message}`

  return (
    <div className={`container ${PostCSS.post}`}>
      <PostDetails post={data.getPost} />
    </div>
  )
}

export default Post

Post.propTypes = {
  props: PropTypes.object,
  match: PropTypes.object
}
