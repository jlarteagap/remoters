import React from 'react'
import { useRouter } from 'next/router'
import Post from '@components/post/Post'

const PostDetail = () => {
  const router = useRouter()
  return <Post slug={router.query.slug} />
}

export default PostDetail
