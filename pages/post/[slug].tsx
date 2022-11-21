import React from 'react'
import { useRouter } from 'next/router'
import Post from '@components/post/Post'
import Seo from '@components/seo/seo'

const PostDetail = () => {
  const router = useRouter()
  return (
    <>
      <Seo />
      <Post slug={router.query.slug} />
    </>
  )
}

export default PostDetail
