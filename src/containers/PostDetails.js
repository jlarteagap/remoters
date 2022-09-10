import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import Post from '../component/post/Post'

const PostDetails = () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Agrega un nuevo empleo</title>
      <meta
        name="description"
        content="Encuentra a los mejores profesionales en tecnología en Bolivia"
      />
      <meta name="author" content="Jorge Luis Arteaga" />
      <meta name="copyright" content="Jorge Luis Arteaga" />
      <meta name="robots" content="index" />

      <meta name="twitter:card" value="summary" />
      <meta property="og:title" content="Details" />
      <meta property="og:type" content="”article" />
      <meta property="og:url" content="" />
      <meta property="og:image" content="" />
    </Helmet>
    <div className="home">
      <Post />
    </div>
  </Fragment>
)

export default PostDetails
